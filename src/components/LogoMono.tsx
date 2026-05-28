type Props = {
  ringStroke?: string;
};

export function LogoMono(props: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      width="46"
      height="46"
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <rect x="2" y="2" width="44" height="44" rx="13" fill="var(--primary)" />
      <circle
        cx="19.5"
        cy="24"
        r="9.5"
        fill="none"
        stroke={props.ringStroke ?? 'var(--bg-card)'}
        strokeWidth="5"
      />
      <rect x="32.4" y="17.5" width="4.2" height="14.5" rx="2.1" fill="var(--accent)" />
      <circle cx="34.5" cy="11.6" r="2.4" fill="var(--accent)" />
    </svg>
  );
}
