function solve(obj) {

    if (obj.dizziness == true) obj.levelOfHydrated += (obj.weight * 0.1) * obj.experience;

    return obj;
}
console.log(solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }));