// Bubble Sort Algorithm
function bubbleSort() {
    disableControls();
    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            div_update(divs[j], div_sizes[j], "yellow");

            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j + 1], div_sizes[j + 1], "red");

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j + 1], div_sizes[j + 1], "red");
            }
            div_update(divs[j], div_sizes[j], "blue");
        }
        div_update(divs[j], div_sizes[j], "green");
    }
    div_update(divs[0], div_sizes[0], "green");
    enableControls();
}

// Merge Sort Algorithm
function merge() {
    c_delay = 0;
    mergePartition(0, array_size - 1);
    enableControls();
}

function mergeSort(start, mid, end) {
    var p = start, q = mid + 1;

    var Arr = [], k = 0;

    for (var i = start; i <= end; i++) {
        if (p > mid) {
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], "red");//Color update
        }
        else if (q > end) {
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "red");//Color update
        }
        else if (div_sizes[p] < div_sizes[q]) {
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "red");//Color update
        }
        else {
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], "red");//Color update
        }
    }

    for (var t = 0; t < k; t++) {
        div_sizes[start++] = Arr[t];
        div_update(divs[start - 1], div_sizes[start - 1], "green");//Color update
    }
}

function mergePartition(start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        div_update(divs[mid], div_sizes[mid], "yellow");//Color update

        mergePartition(start, mid);
        mergePartition(mid + 1, end);

        mergeSort(start, mid, end);
    }
}