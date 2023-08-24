// dynamic arrays are good for pushing and popping (O1)
// but not so great for enqueue and dequeue (ON)

class DynamicArray {

    private capacity: number;
    private size: number;
    public array: number[];

    constructor() {
        this.capacity = 1;
        this.size = 0
        this.array = new Array(this.capacity);
    }

    growArray(): void {
        let temp = new Array(this.capacity*2);
        this.capacity = this.capacity * 2;

        for (let i = 0; i < this.size; i++) {
            temp[i] = this.array[i]
        }
    }

    insert_at(index: number, value: number): void {
        if (this.size === this.capacity) {
            this.growArray()
        }

        for (let i = this.size - 1; i >= index; i--) {
            this.array[i + 1] = this.array[i];
        }

        this.array[index] = value;
        this.size++;
    }

}