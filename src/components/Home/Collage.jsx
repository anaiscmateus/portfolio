import { Image } from "@nextui-org/react";

function Collage() {
  return (
    <section id="collage" className="w-full">
      {/* COLLAGE */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Image isZoomed src="/images/profile-pic.webp" alt="profile picture" />
        </div>
        <div className="grid gap-4">
          <Image isZoomed src="/images/nestor.webp" alt="nestor picture" />
          <Image isZoomed src="/images/platano.webp" alt="platano picture" />
        </div>
      </div>
    </section>
  );
}

export default Collage;
