type SpinnerProps = {
  fullPage?: boolean;
};

export default function Spinner({ fullPage = false }: SpinnerProps) {
  return (
    <div className={fullPage ? 'spinner spinner--fullscreen' : 'spinner'}>
      <div className="spinner__circle" />
    </div>
  );
}
