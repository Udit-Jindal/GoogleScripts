function MergeData(arrDS1, arrDS2) {

    var objDs2 = {};

    var maxDs1Width = 0;

    for (i = 0; i < arrDS1.length; i++) {
        if (arrDS1[i].length > maxDs1Width) {
            maxDs1Width = arrDS1[i].length;
        }
    }

    for (i = 0; i < arrDS2.length; i++) {
        objDs2[arrDS2[i][0]] = arrDS2[i];
    }

    var ds2AddedValues = {};

    var newArr = [];

    for (i = 0; i < arrDS1.length; i++) {

        var ds1Key = arrDS1[i][0];
        var ds1Row = arrDS1[i];

      if(ds1Key===""){
      continue;
      }
      
        if (objDs2[ds1Key] !== undefined) {
            ds2AddedValues[ds1Key] = {};

            if (ds1Row.length < maxDs1Width) {
                ds1Row.concat(new Array(maxDs1Width - ds1Row.length));
            }

            newArr.push(ds1Row.concat(objDs2[ds1Key]));
        } else {
            newArr.push(ds1Row.concat(["NA"]));
        }
    }

    for (key in objDs2) {
      if(key===""){
      continue;
      }
      
        if (!(key in ds2AddedValues)) {
            newArr.push([key, "NA"].concat(new Array(maxDs1Width - 2))
                .concat(objDs2[key]));
        }

    }

    return newArr;
}
