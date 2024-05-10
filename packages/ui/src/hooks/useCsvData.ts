import { useState, useEffect } from 'react';
import Papa from 'papaparse';

export const useCsvData = (csvFile: string) => {
  const [data, setData] = useState<Record<string | number, string | number>[]>([]);

  useEffect(() => {
    if (csvFile) {
      Papa.parse(csvFile, {
        download: true,
        header: true,
        complete: function(results: any) {
          const validData = results.data.filter((row: any, index: number) => {
            return !results.errors.some((error: any) => error.row === index);
          });
          setData(validData);
        }
      });
    }
  }, [csvFile]);

  return data;
}
