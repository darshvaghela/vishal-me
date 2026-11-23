"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Image } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { photos, wall, type Photo } from "@/data/site";

const FAR = -16;
const NEAR = 3;
const DEPTH = NEAR - FAR;

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Random spot that keeps the middle-left (behind the headline) mostly clear. */
function spot(r: () => number) {
  const right = r() < 0.82;
  const x = right ? 1.6 + r() * 7.4 : -9 + r() * 5;
  const y = -4.2 + r() * 8.4;
  return { x, y };
}

type Item = { photo: Photo; x: number; y: number; z: number; h: number };

function Card({
  item,
  index,
  hovered,
  setHovered,
  speed,
}: {
  item: Item;
  index: number;
  hovered: number | null;
  setHovered: (i: number | null) => void;
  speed: React.RefObject<number>;
}) {
  const ref = useRef<THREE.Mesh & { material: { opacity: number; grayscale: number; color: THREE.Color; zoom: number } }>(null);
  const group = useRef<THREE.Group>(null);
  const state = useRef({ ...item, seed: index * 97 + 13 });
  const isHover = hovered === index;
  const white = useMemo(() => new THREE.Color("#ffffff"), []);
  const dim = useMemo(() => new THREE.Color("#b4b4b4"), []);
  const aspect = item.photo.w / item.photo.h;

  useFrame((_, dt) => {
    const s = state.current;
    const g = group.current;
    const m = ref.current?.material;
    if (!g || !m) return;

    s.z += dt * (speed.current ?? 0);
    if (s.z > NEAR) {
      s.z -= DEPTH;
      const r = rng(s.seed++);
      Object.assign(s, spot(r));
    }
    g.position.set(s.x, s.y, s.z);

    const fadeIn = THREE.MathUtils.smoothstep(s.z, FAR, FAR + 5);
    const fadeOut = 1 - THREE.MathUtils.smoothstep(s.z, NEAR - 4, NEAR - 1.4);
    const k = Math.min(1, dt * 6);
    m.opacity = fadeIn * fadeOut;
    m.color.lerp(isHover ? white : dim, k);
    m.grayscale += ((isHover ? 0 : 0.15) - m.grayscale) * k;
    m.zoom += ((isHover ? 1.06 : 1) - m.zoom) * k;
    const sc = g.scale.x + ((isHover ? 1.12 : 1) - g.scale.x) * k;
    g.scale.setScalar(sc);
  });

  return (
    <group ref={group} position={[item.x, item.y, item.z]}>
      {/* eslint-disable-next-line jsx-a11y/alt-text -- three.js mesh, not an <img> */}
      <Image
        ref={ref as never}
        url={`/images/thumbs/${item.photo.src}.jpg`}
        scale={[item.h * aspect, item.h]}
        transparent
        radius={0.06}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(index);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(null);
          document.body.style.cursor = "";
        }}
        onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
      />
      {isHover && (
        <Html position={[0, -item.h / 2 - 0.12, 0]} center style={{ pointerEvents: "none" }}>
          <div className="whitespace-nowrap rounded-full border border-white/15 bg-black/70 px-3 py-1 text-xs text-white backdrop-blur">
            <span className="font-medium">{item.photo.title}</span>
            <span className="text-white/60"> · {item.photo.place}</span>
          </div>
        </Html>
      )}
    </group>
  );
}

function Scene() {
  const [hovered, setHovered] = useState<number | null>(null);
  const speed = useRef(0.45);
  const { camera } = useThree();
  const look = useMemo(() => new THREE.Vector3(0, 0, -4), []);

  const items = useMemo<Item[]>(() => {
    const list = wall.map((src) => photos.find((p) => p.src === src)).filter((p): p is Photo => !!p);
    const r = rng(7);
    return list.map((photo, i) => ({
      photo,
      ...spot(r),
      z: FAR + (i / list.length) * DEPTH,
      h: 1.8 + r() * 1.1,
    }));
  }, []);

  useFrame((state, dt) => {
    const target = hovered === null ? 0.45 : 0;
    speed.current += (target - speed.current) * Math.min(1, dt * 3);
    camera.position.x += (state.pointer.x * 1.1 - camera.position.x) * Math.min(1, dt * 2);
    camera.position.y += (state.pointer.y * 0.7 - camera.position.y) * Math.min(1, dt * 2);
    camera.lookAt(look);
  });

  return (
    <>
      {items.map((item, i) => (
        <Card key={item.photo.src} item={item} index={i} hovered={hovered} setHovered={setHovered} speed={speed} />
      ))}
    </>
  );
}

export default function PhotoWall() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 55 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <fog attach="fog" args={["#07080b", 8, 22]} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
