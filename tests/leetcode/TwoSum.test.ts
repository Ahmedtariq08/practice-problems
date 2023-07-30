import twoSum from "../../leetcode/TwoSum";

const inputOutputMap = new Map([
    [{ array: [2, 7, 11, 15], target: 9 }, [0, 1]],
    [{ array: [3, 2, 4], target: 6 }, [1, 2]],
    [{ array: [3, 3], target: 6 }, [0, 1]],
]);

test("Leetcode - Two Sum", () => {
    inputOutputMap.forEach((value, key) => {
        const result = twoSum(key.array, key.target);
        expect(result).toEqual(value);
    });
});