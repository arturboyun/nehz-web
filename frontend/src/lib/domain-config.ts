export interface DomainConfig {
  name: string;
  logo?: string;
  social?: {
    telegram?: string;
    instagram?: string;
  };
}

export const domainConfigs: Record<string, DomainConfig> = {
  'botsforge.dev': {
    name: 'ARTUR BOYUN',
    social: {
      telegram: 'https://arturboyun.t.me/',
      instagram: 'https://www.instagram.com/artur_boyun?igsh=MXdqamcxcGExMHNjdw%3D%3D&utm_source=qr'
    }
  },
  'nehz.botsforge.dev': {
    name: 'ARTUR BOYUN',
    social: {
      telegram: 'https://arturboyun.t.me/',
      instagram: 'https://www.instagram.com/artur_boyun?igsh=MXdqamcxcGExMHNjdw%3D%3D&utm_source=qr'
    }
  },
  'ohmyroot.com': {
    name: 'OHMYROOT.COM',
    social: {
      telegram: 'https://ohmyroot.t.me/',
    //   instagram: 'https://www.instagram.com/artur_boyun?igsh=MXdqamcxcGExMHNjdw%3D%3D&utm_source=qr'
    }
  },
  'localhost:3000': {
    name: 'Development (3000)',
    social: {
      telegram: 'https://arturboyun.t.me/',
      instagram: 'https://www.instagram.com/artur_boyun?igsh=MXdqamcxcGExMHNjdw%3D%3D&utm_source=qr'
    }
  },
  'localhost:3001': {
    name: 'Development (3001)',
    social: {
      telegram: 'https://arturboyun.t.me/',
      instagram: 'https://www.instagram.com/artur_boyun?igsh=MXdqamcxcGExMHNjdw%3D%3D&utm_source=qr'
    }
  }
};

export function getDomainConfig(hostname: string): DomainConfig {
  return domainConfigs[hostname] || domainConfigs['nehz.dev'];
}
