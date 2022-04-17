export const isMeaningfulStr = (str?: string|null): str is string => {
	return !!str && !/^\s*$/.test(str);
};

export const toCamelCase = (str: string): string => {
	return str.replace(/-(\w)/g, (_, letter: string) => letter.toUpperCase());
};
