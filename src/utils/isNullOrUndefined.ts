/**
 * @param value 判定する値
 * @returns 値がnullまたはundefinedである場合はtrueを返しそれ以外の場合はfalseを返す.
 * @example isNullOrUndefined(null) => true
 * @example isNullOrUndefined(undefined) => true
 */

export const isNullOrUndefined = <T>(value: T | null | undefined): boolean => {
	return value === null || value === undefined;
};
