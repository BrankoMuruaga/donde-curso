import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link className="items-center max-h-14 ml-7" href="/">
      <img
        className="h-14 w-auto"
        src="/UNAHUR-LOGO.webp"
        alt="Logo Universidad Nacional de Hurlingham"
      />
    </Link>
  );
}

export default Logo;
