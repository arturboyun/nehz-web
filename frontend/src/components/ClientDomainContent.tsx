"use client";

import { useEffect, useState } from "react";
import { getDomainConfig, DomainConfig } from "@/lib/domain-config";
import Image from "next/image";
import Title from "@/components/title";

export default function ClientDomainContent() {
  const [config, setConfig] = useState<DomainConfig | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname + (window.location.port ? `:${window.location.port}` : '');
      const domainConfig = getDomainConfig(hostname);
      setConfig(domainConfig);
    }
  }, []);

  if (!config) {
    // Показываем загрузку
    return (
      <div className="flex flex-col gap-[32px] items-center sm:items-start">
        <div className="flex flex-col items-center sm:items-start gap-4">
          <div className="animate-pulse bg-gray-300 rounded h-[38px] w-[180px]"></div>
          <div className="animate-pulse bg-gray-300 rounded h-8 w-48"></div>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div className="animate-pulse bg-gray-300 rounded-full h-10 sm:h-12 w-32"></div>
          <div className="animate-pulse bg-gray-300 rounded-full h-10 sm:h-12 w-32"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[32px] items-center sm:items-start">
      <div className="flex flex-col items-center sm:items-start gap-4">
        <Title config={config} />
      </div>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        {config.social?.telegram && (
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href={config.social.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/telegram.svg"
              alt="Telegram logo"
              width={20}
              height={20}
            />
            Telegram
          </a>
        )}
        {config.social?.instagram && (
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href={config.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram logo"
              width={20}
              height={20}
            />
            Instagram
          </a>
        )}
      </div>
    </div>
  );
}
