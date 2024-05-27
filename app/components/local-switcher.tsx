"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import Image from "next/image";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label className="">
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent  font-semibold text-2xl "
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en" label="🇬🇧"></option>
        <option value="pl" label="🇵🇱"></option>
      </select>
    </label>
  );
}
