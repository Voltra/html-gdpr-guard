export const isMeaningfulStr = (str?: string): str is string => {
	return !!str && !/^\s*$/.test(str);
};
