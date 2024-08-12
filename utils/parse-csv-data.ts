import Papa from 'papaparse';

export const parseCsvDataStringWithoutMapping = (csvData: string): Record<string, string>[] => {
  const parsed = Papa.parse<Record<string, string>>(csvData, { download: false, header: true });

  return parsed.data;
};
