'use client';

import { useEffect, useState } from 'react';
import { getDomainConfig, DomainConfig } from '@/lib/domain-config';

export function useDomainConfig(): DomainConfig | null {
  const [config, setConfig] = useState<DomainConfig | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname + (window.location.port ? `:${window.location.port}` : '');
      const domainConfig = getDomainConfig(hostname);
      setConfig(domainConfig);
    }
  }, []);

  return config;
}
