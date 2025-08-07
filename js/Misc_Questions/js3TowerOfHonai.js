function towerOfHonai(n, fromRod, toRod, usingRod) {
  // Base case
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHonai(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHonai(n - 1, usingRod, toRod, fromRod);
}

towerOfHonai(1, "A", "C", "B");

// 2^n -1 -> O(2^n)
