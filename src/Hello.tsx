import React, { useEffect, useState } from 'react';

export function Hello() {
  const [state, setState] = useState<string>('');
  useEffect(() => {
    setState('Hello');
  }, []);
  return <div>{state} World!!</div>;
}
