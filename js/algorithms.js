// Bubble Sort Algorithm
function bubbleSort() {
  disableControls();
  c_delay = 0;
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
  disableControls();
  mergePartition(0, array_size - 1);
  enableControls();
}

function mergeSort(start, mid, end) {
  var p = start,
    q = mid + 1;

  var Arr = [],
    k = 0;

  for (var i = start; i <= end; i++) {
    if (p > mid) {
      Arr[k++] = div_sizes[q++];
      div_update(divs[q - 1], div_sizes[q - 1], "red"); //Color update
    } else if (q > end) {
      Arr[k++] = div_sizes[p++];
      div_update(divs[p - 1], div_sizes[p - 1], "red"); //Color update
    } else if (div_sizes[p] < div_sizes[q]) {
      Arr[k++] = div_sizes[p++];
      div_update(divs[p - 1], div_sizes[p - 1], "red"); //Color update
    } else {
      Arr[k++] = div_sizes[q++];
      div_update(divs[q - 1], div_sizes[q - 1], "red"); //Color update
    }
  }

  for (var t = 0; t < k; t++) {
    div_sizes[start++] = Arr[t];
    div_update(divs[start - 1], div_sizes[start - 1], "green"); //Color update
  }
}

function mergePartition(start, end) {
  if (start < end) {
    var mid = Math.floor((start + end) / 2);
    div_update(divs[mid], div_sizes[mid], "yellow"); //Color update

    mergePartition(start, mid);
    mergePartition(mid + 1, end);

    mergeSort(start, mid, end);
  }
}

// Selection sort
function selectionSort() {
  c_delay = 0;
  disableControls();
  for (var i = 0; i < array_size - 1; i++) {
    div_update(divs[i], div_sizes[i], "red"); //Color update

    index_min = i;

    for (var j = i + 1; j < array_size; j++) {
      div_update(divs[j], div_sizes[j], "yellow"); //Color update

      if (div_sizes[j] < div_sizes[index_min]) {
        if (index_min != i) {
          div_update(divs[index_min], div_sizes[index_min], "blue"); //Color update
        }
        index_min = j;
        div_update(divs[index_min], div_sizes[index_min], "red"); //Color update
      } else {
        div_update(divs[j], div_sizes[j], "blue"); //Color update
      }
    }

    if (index_min != i) {
      var temp = div_sizes[index_min];
      div_sizes[index_min] = div_sizes[i];
      div_sizes[i] = temp;

      div_update(divs[index_min], div_sizes[index_min], "red"); //Height update
      div_update(divs[i], div_sizes[i], "red"); //Height update
      div_update(divs[index_min], div_sizes[index_min], "blue"); //Color update
    }
    div_update(divs[i], div_sizes[i], "green"); //Color update
  }
  div_update(divs[i], div_sizes[i], "green"); //Color update

  enableControls();
}

// Insertion Sort
function insertionSort() {
  c_delay = 0;
  disableControls();
  for (var j = 0; j < array_size; j++) {
    div_update(divs[j], div_sizes[j], "yellow"); //Color update

    var key = div_sizes[j];
    var i = j - 1;
    while (i >= 0 && div_sizes[i] > key) {
      div_update(divs[i], div_sizes[i], "red"); //Color update
      div_update(divs[i + 1], div_sizes[i + 1], "red"); //Color update

      div_sizes[i + 1] = div_sizes[i];

      div_update(divs[i], div_sizes[i], "red");
      div_update(divs[i + 1], div_sizes[i + 1], "red");

      div_update(divs[i], div_sizes[i], "blue");
      if (i == j - 1) {
        div_update(divs[i + 1], div_sizes[i + 1], "yellow");
      } else {
        div_update(divs[i + 1], div_sizes[i + 1], "blue");
      }
      i -= 1;
    }
    div_sizes[i + 1] = key;

    for (var t = 0; t < j; t++) {
      div_update(divs[t], div_sizes[t], "green"); //Color update
    }
  }
  div_update(divs[j - 1], div_sizes[j - 1], "green"); //Color update

  enableControls();
}

// Heap Sort
function heap() {
  disableControls();
  c_delay = 0;
  heapSort();
  enableControls();
}

function swap(i, j) {
  div_update(divs[i], div_sizes[i], "red"); //Color update
  div_update(divs[j], div_sizes[j], "red"); //Color update

  var temp = div_sizes[i];
  div_sizes[i] = div_sizes[j];
  div_sizes[j] = temp;

  div_update(divs[i], div_sizes[i], "red"); //Height update
  div_update(divs[j], div_sizes[j], "red"); //Height update

  div_update(divs[i], div_sizes[i], "blue"); //Color update
  div_update(divs[j], div_sizes[j], "blue"); //Color update
}

function maxHeapify(n, i) {
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  if (l < n && div_sizes[l] > div_sizes[largest]) {
    if (largest != i) {
      div_update(divs[largest], div_sizes[largest], "blue"); //Color update
    }

    largest = l;

    div_update(divs[largest], div_sizes[largest], "red"); //Color update
  }

  if (r < n && div_sizes[r] > div_sizes[largest]) {
    if (largest != i) {
      div_update(divs[largest], div_sizes[largest], "blue"); //Color update
    }

    largest = r;

    div_update(divs[largest], div_sizes[largest], "red"); //Color update
  }

  if (largest != i) {
    swap(i, largest);

    maxHeapify(n, largest);
  }
}

function heapSort() {
  for (var i = Math.floor(array_size / 2) - 1; i >= 0; i--) {
    maxHeapify(array_size, i);
  }

  for (var i = array_size - 1; i > 0; i--) {
    swap(0, i);
    div_update(divs[i], div_sizes[i], "green"); //Color update
    div_update(divs[i], div_sizes[i], "yellow"); //Color update

    maxHeapify(i, 0);

    div_update(divs[i], div_sizes[i], "blue"); //Color update
    div_update(divs[i], div_sizes[i], "green"); //Color update
  }
  div_update(divs[i], div_sizes[i], "green"); //Color update
}

// Quick Sort
function quick() {
  disableControls();
  c_delay = 0;
  quickSort(0, array_size - 1);
  enableControls();
}

function quickPartition(start, end) {
  var i = start + 1;
  var piv = div_sizes[start]; //make the first element as pivot element.
  div_update(divs[start], div_sizes[start], "yellow"); //Color update

  for (var j = start + 1; j <= end; j++) {
    //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
    if (div_sizes[j] < piv) {
      div_update(divs[j], div_sizes[j], "yellow"); //Color update

      div_update(divs[i], div_sizes[i], "red"); //Color update
      div_update(divs[j], div_sizes[j], "red"); //Color update

      var temp = div_sizes[i];
      div_sizes[i] = div_sizes[j];
      div_sizes[j] = temp;

      div_update(divs[i], div_sizes[i], "red"); //Height update
      div_update(divs[j], div_sizes[j], "red"); //Height update

      div_update(divs[i], div_sizes[i], "blue"); //Height update
      div_update(divs[j], div_sizes[j], "blue"); //Height update

      i += 1;
    }
  }
  div_update(divs[start], div_sizes[start], "red"); //Color update
  div_update(divs[i - 1], div_sizes[i - 1], "red"); //Color update

  var temp = div_sizes[start]; //put the pivot element in its proper place.
  div_sizes[start] = div_sizes[i - 1];
  div_sizes[i - 1] = temp;

  div_update(divs[start], div_sizes[start], "red"); //Height update
  div_update(divs[i - 1], div_sizes[i - 1], "red"); //Height update

  for (var t = start; t <= i; t++) {
    div_update(divs[t], div_sizes[t], "green"); //Color update
  }

  return i - 1; //return the position of the pivot
}

function quickSort(start, end) {
  if (start < end) {
    //stores the position of pivot element
    var piv_pos = quickPartition(start, end);
    quickSort(start, piv_pos - 1); //sorts the left side of pivot.
    quickSort(piv_pos + 1, end); //sorts the right side of pivot.
  }
}
