import {useState ,useEffect} from 'react';

export default function useBebounce(value,time) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, time);


      return () => {
        clearTimeout(handler);
      };
    }, [value, time]);
   
    return debouncedValue;
}
