

import { headers } from 'next/headers';
import { getDomainConfig } from '@/lib/domain-config';
import Image from "next/image";
import Title from '@/components/title';

export default async function ServerDomainContent() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const config = getDomainConfig(host);


  return (
    <div className="flex flex-col gap-[24]px items-center sm:items-start">
      <Title config={config} />
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
