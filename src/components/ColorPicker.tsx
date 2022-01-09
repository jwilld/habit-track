import * as ncp from 'nice-color-palettes/100.json';

function Palette(palettes: string[][]) {
    
}

export default function ColorPicker() {
  const colorPalettes = ncp.map((obj: any) => obj);

  return (
    <div>
      <h1>Color Picker</h1>
    </div>
  );
}
