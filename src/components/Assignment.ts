export class Solution {

    graph = new Map();
    ans: string[][] = [];
    temp: string[] = [];

    insert(friend1: string, friend2: string) {

        if (this.graph.has(friend1)) {

            const values = this.graph.get(friend1)
            values.push(friend2)
            this.graph.set(friend1, values)

        } else {
            this.graph.set(friend1, [friend2])
        }

    }

    findDegreeOfSepration(current: string, target: string) {

        this.temp.push(current);

        if (current === target) {
            this.ans = [...this.ans, this.temp]
        }
        else {

            if (this.graph.has(current)) {
                const ex = this.graph.get(current)

                for (let curr of ex) {
                    this.findDegreeOfSepration(curr, target);
                }
            }
        }
        this.temp = this.temp.slice(0, this.temp.length - 1);
    }

    clearPreviousResults() {
        this.ans = [];
    }

    print() {
        if (this.ans.length) {
            this.ans.forEach((relation) => {
                console.log(relation.join(" > "))
            })
        }

    }

}

