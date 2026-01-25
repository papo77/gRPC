/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 1008.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 0.0], [3.3, 0.0], [3.4, 0.0], [3.5, 0.0], [3.6, 0.0], [3.7, 0.0], [3.8, 0.0], [3.9, 0.0], [4.0, 0.0], [4.1, 0.0], [4.2, 0.0], [4.3, 0.0], [4.4, 0.0], [4.5, 0.0], [4.6, 0.0], [4.7, 0.0], [4.8, 0.0], [4.9, 0.0], [5.0, 0.0], [5.1, 0.0], [5.2, 0.0], [5.3, 0.0], [5.4, 0.0], [5.5, 0.0], [5.6, 0.0], [5.7, 0.0], [5.8, 0.0], [5.9, 0.0], [6.0, 0.0], [6.1, 0.0], [6.2, 0.0], [6.3, 0.0], [6.4, 0.0], [6.5, 0.0], [6.6, 0.0], [6.7, 0.0], [6.8, 0.0], [6.9, 0.0], [7.0, 0.0], [7.1, 0.0], [7.2, 0.0], [7.3, 0.0], [7.4, 0.0], [7.5, 0.0], [7.6, 0.0], [7.7, 0.0], [7.8, 0.0], [7.9, 0.0], [8.0, 0.0], [8.1, 0.0], [8.2, 0.0], [8.3, 0.0], [8.4, 0.0], [8.5, 0.0], [8.6, 0.0], [8.7, 0.0], [8.8, 0.0], [8.9, 0.0], [9.0, 0.0], [9.1, 0.0], [9.2, 0.0], [9.3, 0.0], [9.4, 0.0], [9.5, 0.0], [9.6, 0.0], [9.7, 0.0], [9.8, 0.0], [9.9, 0.0], [10.0, 0.0], [10.1, 0.0], [10.2, 0.0], [10.3, 0.0], [10.4, 0.0], [10.5, 0.0], [10.6, 0.0], [10.7, 0.0], [10.8, 0.0], [10.9, 0.0], [11.0, 0.0], [11.1, 0.0], [11.2, 0.0], [11.3, 0.0], [11.4, 0.0], [11.5, 0.0], [11.6, 0.0], [11.7, 0.0], [11.8, 0.0], [11.9, 0.0], [12.0, 0.0], [12.1, 0.0], [12.2, 0.0], [12.3, 0.0], [12.4, 0.0], [12.5, 0.0], [12.6, 0.0], [12.7, 0.0], [12.8, 0.0], [12.9, 0.0], [13.0, 0.0], [13.1, 0.0], [13.2, 0.0], [13.3, 0.0], [13.4, 0.0], [13.5, 0.0], [13.6, 0.0], [13.7, 0.0], [13.8, 0.0], [13.9, 0.0], [14.0, 0.0], [14.1, 0.0], [14.2, 0.0], [14.3, 0.0], [14.4, 0.0], [14.5, 0.0], [14.6, 0.0], [14.7, 0.0], [14.8, 0.0], [14.9, 0.0], [15.0, 0.0], [15.1, 0.0], [15.2, 0.0], [15.3, 0.0], [15.4, 0.0], [15.5, 0.0], [15.6, 0.0], [15.7, 0.0], [15.8, 0.0], [15.9, 0.0], [16.0, 0.0], [16.1, 0.0], [16.2, 0.0], [16.3, 0.0], [16.4, 0.0], [16.5, 0.0], [16.6, 0.0], [16.7, 0.0], [16.8, 0.0], [16.9, 0.0], [17.0, 0.0], [17.1, 0.0], [17.2, 0.0], [17.3, 0.0], [17.4, 0.0], [17.5, 0.0], [17.6, 0.0], [17.7, 0.0], [17.8, 0.0], [17.9, 0.0], [18.0, 0.0], [18.1, 0.0], [18.2, 0.0], [18.3, 0.0], [18.4, 0.0], [18.5, 0.0], [18.6, 0.0], [18.7, 0.0], [18.8, 0.0], [18.9, 0.0], [19.0, 0.0], [19.1, 0.0], [19.2, 0.0], [19.3, 0.0], [19.4, 0.0], [19.5, 0.0], [19.6, 0.0], [19.7, 0.0], [19.8, 0.0], [19.9, 0.0], [20.0, 0.0], [20.1, 0.0], [20.2, 0.0], [20.3, 0.0], [20.4, 0.0], [20.5, 0.0], [20.6, 0.0], [20.7, 0.0], [20.8, 0.0], [20.9, 0.0], [21.0, 0.0], [21.1, 0.0], [21.2, 0.0], [21.3, 0.0], [21.4, 0.0], [21.5, 0.0], [21.6, 0.0], [21.7, 0.0], [21.8, 0.0], [21.9, 0.0], [22.0, 0.0], [22.1, 0.0], [22.2, 0.0], [22.3, 0.0], [22.4, 0.0], [22.5, 0.0], [22.6, 0.0], [22.7, 0.0], [22.8, 0.0], [22.9, 0.0], [23.0, 0.0], [23.1, 0.0], [23.2, 1.0], [23.3, 1.0], [23.4, 1.0], [23.5, 1.0], [23.6, 1.0], [23.7, 1.0], [23.8, 1.0], [23.9, 1.0], [24.0, 1.0], [24.1, 1.0], [24.2, 1.0], [24.3, 1.0], [24.4, 1.0], [24.5, 1.0], [24.6, 1.0], [24.7, 1.0], [24.8, 1.0], [24.9, 1.0], [25.0, 1.0], [25.1, 1.0], [25.2, 1.0], [25.3, 1.0], [25.4, 1.0], [25.5, 1.0], [25.6, 1.0], [25.7, 1.0], [25.8, 1.0], [25.9, 1.0], [26.0, 1.0], [26.1, 2.0], [26.2, 2.0], [26.3, 4.0], [26.4, 9.0], [26.5, 32.0], [26.6, 35.0], [26.7, 38.0], [26.8, 39.0], [26.9, 40.0], [27.0, 41.0], [27.1, 42.0], [27.2, 43.0], [27.3, 44.0], [27.4, 44.0], [27.5, 45.0], [27.6, 45.0], [27.7, 46.0], [27.8, 46.0], [27.9, 47.0], [28.0, 47.0], [28.1, 47.0], [28.2, 48.0], [28.3, 48.0], [28.4, 48.0], [28.5, 49.0], [28.6, 49.0], [28.7, 49.0], [28.8, 50.0], [28.9, 50.0], [29.0, 50.0], [29.1, 50.0], [29.2, 51.0], [29.3, 51.0], [29.4, 51.0], [29.5, 51.0], [29.6, 52.0], [29.7, 52.0], [29.8, 52.0], [29.9, 52.0], [30.0, 53.0], [30.1, 53.0], [30.2, 53.0], [30.3, 53.0], [30.4, 53.0], [30.5, 54.0], [30.6, 54.0], [30.7, 54.0], [30.8, 54.0], [30.9, 54.0], [31.0, 55.0], [31.1, 55.0], [31.2, 55.0], [31.3, 55.0], [31.4, 55.0], [31.5, 56.0], [31.6, 56.0], [31.7, 56.0], [31.8, 56.0], [31.9, 56.0], [32.0, 57.0], [32.1, 57.0], [32.2, 57.0], [32.3, 57.0], [32.4, 57.0], [32.5, 57.0], [32.6, 58.0], [32.7, 58.0], [32.8, 58.0], [32.9, 58.0], [33.0, 58.0], [33.1, 58.0], [33.2, 59.0], [33.3, 59.0], [33.4, 59.0], [33.5, 59.0], [33.6, 59.0], [33.7, 59.0], [33.8, 60.0], [33.9, 60.0], [34.0, 60.0], [34.1, 60.0], [34.2, 60.0], [34.3, 60.0], [34.4, 61.0], [34.5, 61.0], [34.6, 61.0], [34.7, 61.0], [34.8, 61.0], [34.9, 61.0], [35.0, 62.0], [35.1, 62.0], [35.2, 62.0], [35.3, 62.0], [35.4, 62.0], [35.5, 62.0], [35.6, 62.0], [35.7, 63.0], [35.8, 63.0], [35.9, 63.0], [36.0, 63.0], [36.1, 63.0], [36.2, 63.0], [36.3, 63.0], [36.4, 64.0], [36.5, 64.0], [36.6, 64.0], [36.7, 64.0], [36.8, 64.0], [36.9, 64.0], [37.0, 65.0], [37.1, 65.0], [37.2, 65.0], [37.3, 65.0], [37.4, 65.0], [37.5, 65.0], [37.6, 65.0], [37.7, 66.0], [37.8, 66.0], [37.9, 66.0], [38.0, 66.0], [38.1, 66.0], [38.2, 66.0], [38.3, 66.0], [38.4, 67.0], [38.5, 67.0], [38.6, 67.0], [38.7, 67.0], [38.8, 67.0], [38.9, 67.0], [39.0, 67.0], [39.1, 68.0], [39.2, 68.0], [39.3, 68.0], [39.4, 68.0], [39.5, 68.0], [39.6, 68.0], [39.7, 68.0], [39.8, 69.0], [39.9, 69.0], [40.0, 69.0], [40.1, 69.0], [40.2, 69.0], [40.3, 69.0], [40.4, 69.0], [40.5, 70.0], [40.6, 70.0], [40.7, 70.0], [40.8, 70.0], [40.9, 70.0], [41.0, 70.0], [41.1, 71.0], [41.2, 71.0], [41.3, 71.0], [41.4, 71.0], [41.5, 71.0], [41.6, 71.0], [41.7, 71.0], [41.8, 72.0], [41.9, 72.0], [42.0, 72.0], [42.1, 72.0], [42.2, 72.0], [42.3, 72.0], [42.4, 73.0], [42.5, 73.0], [42.6, 73.0], [42.7, 73.0], [42.8, 73.0], [42.9, 73.0], [43.0, 73.0], [43.1, 74.0], [43.2, 74.0], [43.3, 74.0], [43.4, 74.0], [43.5, 74.0], [43.6, 74.0], [43.7, 75.0], [43.8, 75.0], [43.9, 75.0], [44.0, 75.0], [44.1, 75.0], [44.2, 75.0], [44.3, 76.0], [44.4, 76.0], [44.5, 76.0], [44.6, 76.0], [44.7, 76.0], [44.8, 76.0], [44.9, 77.0], [45.0, 77.0], [45.1, 77.0], [45.2, 77.0], [45.3, 77.0], [45.4, 77.0], [45.5, 78.0], [45.6, 78.0], [45.7, 78.0], [45.8, 78.0], [45.9, 78.0], [46.0, 79.0], [46.1, 79.0], [46.2, 79.0], [46.3, 79.0], [46.4, 79.0], [46.5, 79.0], [46.6, 80.0], [46.7, 80.0], [46.8, 80.0], [46.9, 80.0], [47.0, 80.0], [47.1, 80.0], [47.2, 81.0], [47.3, 81.0], [47.4, 81.0], [47.5, 81.0], [47.6, 81.0], [47.7, 82.0], [47.8, 82.0], [47.9, 82.0], [48.0, 82.0], [48.1, 82.0], [48.2, 83.0], [48.3, 83.0], [48.4, 83.0], [48.5, 83.0], [48.6, 83.0], [48.7, 83.0], [48.8, 84.0], [48.9, 84.0], [49.0, 84.0], [49.1, 84.0], [49.2, 84.0], [49.3, 85.0], [49.4, 85.0], [49.5, 85.0], [49.6, 85.0], [49.7, 86.0], [49.8, 86.0], [49.9, 86.0], [50.0, 86.0], [50.1, 86.0], [50.2, 87.0], [50.3, 87.0], [50.4, 87.0], [50.5, 87.0], [50.6, 87.0], [50.7, 88.0], [50.8, 88.0], [50.9, 88.0], [51.0, 88.0], [51.1, 88.0], [51.2, 89.0], [51.3, 89.0], [51.4, 89.0], [51.5, 89.0], [51.6, 90.0], [51.7, 90.0], [51.8, 90.0], [51.9, 90.0], [52.0, 90.0], [52.1, 91.0], [52.2, 91.0], [52.3, 91.0], [52.4, 91.0], [52.5, 91.0], [52.6, 92.0], [52.7, 92.0], [52.8, 92.0], [52.9, 92.0], [53.0, 92.0], [53.1, 93.0], [53.2, 93.0], [53.3, 93.0], [53.4, 93.0], [53.5, 94.0], [53.6, 94.0], [53.7, 94.0], [53.8, 94.0], [53.9, 94.0], [54.0, 95.0], [54.1, 95.0], [54.2, 95.0], [54.3, 95.0], [54.4, 95.0], [54.5, 96.0], [54.6, 96.0], [54.7, 96.0], [54.8, 96.0], [54.9, 96.0], [55.0, 97.0], [55.1, 97.0], [55.2, 97.0], [55.3, 97.0], [55.4, 97.0], [55.5, 98.0], [55.6, 98.0], [55.7, 98.0], [55.8, 98.0], [55.9, 98.0], [56.0, 98.0], [56.1, 99.0], [56.2, 99.0], [56.3, 99.0], [56.4, 99.0], [56.5, 99.0], [56.6, 100.0], [56.7, 100.0], [56.8, 100.0], [56.9, 100.0], [57.0, 100.0], [57.1, 100.0], [57.2, 101.0], [57.3, 101.0], [57.4, 101.0], [57.5, 101.0], [57.6, 101.0], [57.7, 102.0], [57.8, 102.0], [57.9, 102.0], [58.0, 102.0], [58.1, 102.0], [58.2, 103.0], [58.3, 103.0], [58.4, 103.0], [58.5, 103.0], [58.6, 103.0], [58.7, 104.0], [58.8, 104.0], [58.9, 104.0], [59.0, 104.0], [59.1, 104.0], [59.2, 104.0], [59.3, 105.0], [59.4, 105.0], [59.5, 105.0], [59.6, 105.0], [59.7, 105.0], [59.8, 106.0], [59.9, 106.0], [60.0, 106.0], [60.1, 106.0], [60.2, 106.0], [60.3, 107.0], [60.4, 107.0], [60.5, 107.0], [60.6, 107.0], [60.7, 107.0], [60.8, 108.0], [60.9, 108.0], [61.0, 108.0], [61.1, 108.0], [61.2, 108.0], [61.3, 109.0], [61.4, 109.0], [61.5, 109.0], [61.6, 109.0], [61.7, 109.0], [61.8, 109.0], [61.9, 110.0], [62.0, 110.0], [62.1, 110.0], [62.2, 110.0], [62.3, 110.0], [62.4, 111.0], [62.5, 111.0], [62.6, 111.0], [62.7, 111.0], [62.8, 111.0], [62.9, 111.0], [63.0, 112.0], [63.1, 112.0], [63.2, 112.0], [63.3, 112.0], [63.4, 112.0], [63.5, 112.0], [63.6, 113.0], [63.7, 113.0], [63.8, 113.0], [63.9, 113.0], [64.0, 113.0], [64.1, 114.0], [64.2, 114.0], [64.3, 114.0], [64.4, 114.0], [64.5, 114.0], [64.6, 114.0], [64.7, 115.0], [64.8, 115.0], [64.9, 115.0], [65.0, 115.0], [65.1, 115.0], [65.2, 115.0], [65.3, 116.0], [65.4, 116.0], [65.5, 116.0], [65.6, 116.0], [65.7, 116.0], [65.8, 116.0], [65.9, 117.0], [66.0, 117.0], [66.1, 117.0], [66.2, 117.0], [66.3, 117.0], [66.4, 117.0], [66.5, 118.0], [66.6, 118.0], [66.7, 118.0], [66.8, 118.0], [66.9, 118.0], [67.0, 118.0], [67.1, 119.0], [67.2, 119.0], [67.3, 119.0], [67.4, 119.0], [67.5, 119.0], [67.6, 119.0], [67.7, 120.0], [67.8, 120.0], [67.9, 120.0], [68.0, 120.0], [68.1, 120.0], [68.2, 120.0], [68.3, 121.0], [68.4, 121.0], [68.5, 121.0], [68.6, 121.0], [68.7, 121.0], [68.8, 121.0], [68.9, 122.0], [69.0, 122.0], [69.1, 122.0], [69.2, 122.0], [69.3, 122.0], [69.4, 123.0], [69.5, 123.0], [69.6, 123.0], [69.7, 123.0], [69.8, 123.0], [69.9, 123.0], [70.0, 124.0], [70.1, 124.0], [70.2, 124.0], [70.3, 124.0], [70.4, 124.0], [70.5, 124.0], [70.6, 125.0], [70.7, 125.0], [70.8, 125.0], [70.9, 125.0], [71.0, 125.0], [71.1, 125.0], [71.2, 126.0], [71.3, 126.0], [71.4, 126.0], [71.5, 126.0], [71.6, 126.0], [71.7, 127.0], [71.8, 127.0], [71.9, 127.0], [72.0, 127.0], [72.1, 127.0], [72.2, 127.0], [72.3, 128.0], [72.4, 128.0], [72.5, 128.0], [72.6, 128.0], [72.7, 128.0], [72.8, 129.0], [72.9, 129.0], [73.0, 129.0], [73.1, 129.0], [73.2, 129.0], [73.3, 130.0], [73.4, 130.0], [73.5, 130.0], [73.6, 130.0], [73.7, 130.0], [73.8, 131.0], [73.9, 131.0], [74.0, 131.0], [74.1, 131.0], [74.2, 131.0], [74.3, 132.0], [74.4, 132.0], [74.5, 132.0], [74.6, 132.0], [74.7, 132.0], [74.8, 133.0], [74.9, 133.0], [75.0, 133.0], [75.1, 133.0], [75.2, 134.0], [75.3, 134.0], [75.4, 134.0], [75.5, 134.0], [75.6, 134.0], [75.7, 135.0], [75.8, 135.0], [75.9, 135.0], [76.0, 135.0], [76.1, 136.0], [76.2, 136.0], [76.3, 136.0], [76.4, 136.0], [76.5, 137.0], [76.6, 137.0], [76.7, 137.0], [76.8, 137.0], [76.9, 138.0], [77.0, 138.0], [77.1, 138.0], [77.2, 138.0], [77.3, 139.0], [77.4, 139.0], [77.5, 139.0], [77.6, 139.0], [77.7, 140.0], [77.8, 140.0], [77.9, 140.0], [78.0, 141.0], [78.1, 141.0], [78.2, 141.0], [78.3, 141.0], [78.4, 142.0], [78.5, 142.0], [78.6, 142.0], [78.7, 142.0], [78.8, 143.0], [78.9, 143.0], [79.0, 143.0], [79.1, 144.0], [79.2, 144.0], [79.3, 144.0], [79.4, 144.0], [79.5, 145.0], [79.6, 145.0], [79.7, 145.0], [79.8, 145.0], [79.9, 146.0], [80.0, 146.0], [80.1, 146.0], [80.2, 147.0], [80.3, 147.0], [80.4, 147.0], [80.5, 147.0], [80.6, 148.0], [80.7, 148.0], [80.8, 148.0], [80.9, 149.0], [81.0, 149.0], [81.1, 149.0], [81.2, 150.0], [81.3, 150.0], [81.4, 150.0], [81.5, 150.0], [81.6, 151.0], [81.7, 151.0], [81.8, 151.0], [81.9, 152.0], [82.0, 152.0], [82.1, 152.0], [82.2, 153.0], [82.3, 153.0], [82.4, 153.0], [82.5, 153.0], [82.6, 154.0], [82.7, 154.0], [82.8, 154.0], [82.9, 155.0], [83.0, 155.0], [83.1, 155.0], [83.2, 156.0], [83.3, 156.0], [83.4, 156.0], [83.5, 157.0], [83.6, 157.0], [83.7, 157.0], [83.8, 158.0], [83.9, 158.0], [84.0, 158.0], [84.1, 158.0], [84.2, 159.0], [84.3, 159.0], [84.4, 159.0], [84.5, 160.0], [84.6, 160.0], [84.7, 160.0], [84.8, 161.0], [84.9, 161.0], [85.0, 161.0], [85.1, 162.0], [85.2, 162.0], [85.3, 162.0], [85.4, 162.0], [85.5, 163.0], [85.6, 163.0], [85.7, 163.0], [85.8, 164.0], [85.9, 164.0], [86.0, 164.0], [86.1, 165.0], [86.2, 165.0], [86.3, 165.0], [86.4, 165.0], [86.5, 166.0], [86.6, 166.0], [86.7, 166.0], [86.8, 167.0], [86.9, 167.0], [87.0, 167.0], [87.1, 168.0], [87.2, 168.0], [87.3, 168.0], [87.4, 168.0], [87.5, 169.0], [87.6, 169.0], [87.7, 169.0], [87.8, 170.0], [87.9, 170.0], [88.0, 170.0], [88.1, 171.0], [88.2, 171.0], [88.3, 171.0], [88.4, 172.0], [88.5, 172.0], [88.6, 172.0], [88.7, 172.0], [88.8, 173.0], [88.9, 173.0], [89.0, 173.0], [89.1, 174.0], [89.2, 174.0], [89.3, 174.0], [89.4, 175.0], [89.5, 175.0], [89.6, 175.0], [89.7, 176.0], [89.8, 176.0], [89.9, 176.0], [90.0, 177.0], [90.1, 177.0], [90.2, 178.0], [90.3, 178.0], [90.4, 178.0], [90.5, 179.0], [90.6, 179.0], [90.7, 180.0], [90.8, 180.0], [90.9, 180.0], [91.0, 181.0], [91.1, 181.0], [91.2, 182.0], [91.3, 182.0], [91.4, 182.0], [91.5, 183.0], [91.6, 183.0], [91.7, 184.0], [91.8, 184.0], [91.9, 185.0], [92.0, 185.0], [92.1, 186.0], [92.2, 186.0], [92.3, 186.0], [92.4, 187.0], [92.5, 187.0], [92.6, 188.0], [92.7, 188.0], [92.8, 189.0], [92.9, 189.0], [93.0, 190.0], [93.1, 190.0], [93.2, 190.0], [93.3, 191.0], [93.4, 191.0], [93.5, 192.0], [93.6, 192.0], [93.7, 193.0], [93.8, 193.0], [93.9, 194.0], [94.0, 194.0], [94.1, 195.0], [94.2, 195.0], [94.3, 196.0], [94.4, 196.0], [94.5, 197.0], [94.6, 197.0], [94.7, 198.0], [94.8, 198.0], [94.9, 199.0], [95.0, 200.0], [95.1, 200.0], [95.2, 201.0], [95.3, 201.0], [95.4, 202.0], [95.5, 203.0], [95.6, 203.0], [95.7, 204.0], [95.8, 204.0], [95.9, 205.0], [96.0, 206.0], [96.1, 206.0], [96.2, 207.0], [96.3, 208.0], [96.4, 208.0], [96.5, 209.0], [96.6, 210.0], [96.7, 211.0], [96.8, 211.0], [96.9, 212.0], [97.0, 213.0], [97.1, 214.0], [97.2, 215.0], [97.3, 216.0], [97.4, 217.0], [97.5, 218.0], [97.6, 219.0], [97.7, 220.0], [97.8, 221.0], [97.9, 222.0], [98.0, 223.0], [98.1, 225.0], [98.2, 226.0], [98.3, 227.0], [98.4, 229.0], [98.5, 230.0], [98.6, 232.0], [98.7, 233.0], [98.8, 235.0], [98.9, 237.0], [99.0, 239.0], [99.1, 242.0], [99.2, 244.0], [99.3, 248.0], [99.4, 252.0], [99.5, 258.0], [99.6, 266.0], [99.7, 276.0], [99.8, 291.0], [99.9, 335.0]], "isOverall": false, "label": "MakePDF", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 438081.0, "series": [{"data": [[0.0, 438081.0], [600.0, 166.0], [300.0, 778.0], [700.0, 130.0], [400.0, 152.0], [100.0, 297377.0], [200.0, 37487.0], [800.0, 2.0], [500.0, 47.0], [1000.0, 1.0]], "isOverall": false, "label": "MakePDF", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 345.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 569321.0, "series": [{"data": [[0.0, 569321.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 345.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 204555.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 996.7496153121466, "minX": 1.76889174E12, "maxY": 1000.0, "series": [{"data": [[1.7688918E12, 1000.0], [1.76889186E12, 996.7496153121466], [1.76889174E12, 1000.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76889186E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 4.0, "minX": 1.0, "maxY": 612.0, "series": [{"data": [[2.0, 5.0], [3.0, 5.0], [4.0, 6.0], [5.0, 6.0], [6.0, 11.0], [7.0, 5.0], [8.0, 6.0], [9.0, 6.0], [10.0, 6.0], [11.0, 6.0], [12.0, 9.0], [13.0, 5.0], [14.0, 7.0], [15.0, 6.0], [16.0, 5.0], [17.0, 5.0], [18.0, 5.0], [19.0, 6.0], [20.0, 6.0], [21.0, 7.0], [22.0, 5.0], [23.0, 5.0], [24.0, 6.0], [25.0, 5.0], [26.0, 6.0], [27.0, 6.0], [28.0, 6.0], [29.0, 6.0], [30.0, 7.0], [31.0, 6.0], [33.0, 8.0], [32.0, 8.0], [35.0, 5.0], [34.0, 6.0], [37.0, 6.0], [36.0, 6.0], [39.0, 6.0], [38.0, 6.0], [41.0, 5.0], [40.0, 6.0], [43.0, 6.0], [42.0, 6.0], [45.0, 5.0], [44.0, 6.0], [47.0, 6.0], [46.0, 5.0], [49.0, 6.0], [48.0, 7.0], [51.0, 6.0], [50.0, 6.0], [53.0, 6.0], [52.0, 6.0], [55.0, 5.0], [54.0, 7.0], [57.0, 5.0], [56.0, 6.0], [59.0, 6.0], [58.0, 6.0], [61.0, 6.0], [60.0, 6.0], [63.0, 6.0], [62.0, 7.0], [67.0, 6.0], [66.0, 5.0], [65.0, 6.0], [64.0, 6.0], [71.0, 6.0], [70.0, 5.0], [69.0, 6.0], [68.0, 6.0], [73.0, 7.0], [72.0, 612.0], [80.0, 411.2857142857143], [87.0, 385.0], [86.0, 387.0], [85.0, 386.3333333333333], [91.0, 4.0], [90.0, 387.5], [88.0, 388.0], [94.0, 219.0], [92.0, 53.0], [99.0, 235.0], [111.0, 224.0], [108.0, 218.0], [119.0, 225.0], [117.0, 217.0], [123.0, 220.0], [127.0, 224.5], [134.0, 226.0], [133.0, 225.33333333333334], [129.0, 215.5], [142.0, 219.5], [138.0, 217.0], [150.0, 217.0], [147.0, 227.0], [145.0, 222.0], [158.0, 219.25], [157.0, 220.875], [167.0, 230.0], [166.0, 221.0], [165.0, 236.0], [164.0, 216.25], [163.0, 216.0], [162.0, 220.54545454545453], [161.0, 221.0], [175.0, 216.0], [172.0, 216.0], [171.0, 212.0], [182.0, 218.0], [177.0, 216.33333333333334], [191.0, 218.0], [189.0, 218.25000000000003], [188.0, 222.57142857142858], [187.0, 224.0], [184.0, 223.0], [196.0, 225.5], [194.0, 218.33333333333334], [193.0, 217.0], [192.0, 215.0], [206.0, 226.0], [203.0, 218.5], [215.0, 208.83333333333331], [209.0, 218.0], [208.0, 225.0], [223.0, 205.0], [222.0, 217.0], [220.0, 209.0], [219.0, 211.0], [231.0, 210.5], [229.0, 211.0], [228.0, 212.0], [224.0, 209.25], [237.0, 216.33333333333334], [236.0, 208.5], [232.0, 210.33333333333334], [247.0, 214.0], [242.0, 215.8], [241.0, 211.0], [254.0, 204.0], [253.0, 205.0], [252.0, 220.0], [250.0, 221.0], [249.0, 222.0], [269.0, 224.0], [270.0, 209.0], [268.0, 214.0], [265.0, 200.0], [264.0, 211.0], [263.0, 208.0], [262.0, 219.0], [260.0, 216.0], [256.0, 210.0], [286.0, 202.5], [284.0, 223.0], [282.0, 221.0], [278.0, 212.5], [276.0, 214.75], [275.0, 213.0], [274.0, 218.0], [272.0, 213.0], [291.0, 214.0], [303.0, 216.0], [301.0, 201.0], [299.0, 197.0], [298.0, 201.0], [296.0, 202.0], [294.0, 198.0], [293.0, 198.5], [290.0, 224.66666666666666], [289.0, 202.0], [312.0, 186.0], [311.0, 196.0], [310.0, 193.0], [308.0, 236.0], [306.0, 209.0], [305.0, 202.0], [321.0, 194.0], [345.0, 204.0], [367.0, 202.0], [361.0, 197.0], [353.0, 187.0], [381.0, 180.0], [369.0, 198.0], [368.0, 189.5], [394.0, 184.0], [408.0, 182.0], [407.0, 186.0], [405.0, 185.0], [403.0, 180.0], [402.0, 191.66666666666666], [401.0, 197.0], [427.0, 192.0], [426.0, 193.0], [425.0, 179.0], [424.0, 177.0], [419.0, 179.0], [447.0, 192.0], [441.0, 189.0], [436.0, 191.0], [433.0, 189.5], [461.0, 175.0], [458.0, 180.0], [457.0, 202.33333333333334], [456.0, 307.0], [455.0, 295.0], [453.0, 174.0], [452.0, 217.33333333333334], [451.0, 181.0], [450.0, 477.0], [476.0, 229.5], [475.0, 174.0], [472.0, 183.0], [465.0, 360.0], [464.0, 175.0], [491.0, 176.0], [490.0, 165.0], [509.0, 179.0], [508.0, 172.0], [505.0, 168.0], [501.0, 167.0], [499.0, 176.0], [498.0, 165.5], [497.0, 186.44444444444446], [526.0, 184.0], [542.0, 255.0], [541.0, 170.0], [539.0, 168.0], [525.0, 167.0], [524.0, 167.0], [522.0, 168.25], [521.0, 179.0], [514.0, 169.0], [512.0, 174.5], [569.0, 172.0], [563.0, 160.0], [556.0, 168.0], [551.0, 166.0], [550.0, 287.0], [549.0, 165.0], [545.0, 179.0], [601.0, 244.0], [599.0, 261.5], [588.0, 165.0], [584.0, 171.0], [577.0, 182.0], [623.0, 194.0], [622.0, 171.0], [618.0, 172.5], [617.0, 162.0], [670.0, 155.0], [669.0, 197.5], [665.0, 192.66666666666666], [664.0, 240.0], [663.0, 184.79999999999998], [658.0, 166.0], [656.0, 167.0], [696.0, 231.0], [694.0, 238.0], [675.0, 215.0], [672.0, 254.5], [721.0, 240.0], [715.0, 233.0], [713.0, 250.5], [766.0, 209.0], [764.0, 212.0], [756.0, 218.0], [749.0, 242.09090909090907], [748.0, 244.55555555555554], [747.0, 227.0], [746.0, 442.0], [742.0, 226.0], [741.0, 234.84210526315792], [798.0, 203.0], [799.0, 189.42857142857144], [797.0, 205.0], [775.0, 169.0], [772.0, 231.0], [771.0, 174.0], [770.0, 196.23913043478268], [768.0, 211.0], [788.0, 170.0], [785.0, 177.0], [784.0, 202.0], [782.0, 205.0], [780.0, 185.2], [779.0, 298.0], [778.0, 174.0], [827.0, 181.33333333333334], [831.0, 165.0], [825.0, 166.0], [824.0, 206.5], [820.0, 174.0], [819.0, 180.72727272727272], [817.0, 208.0], [813.0, 173.0], [800.0, 233.0], [804.0, 199.0], [803.0, 201.0], [862.0, 181.6923076923077], [863.0, 188.2], [860.0, 177.4], [859.0, 208.64285714285714], [857.0, 187.375], [856.0, 202.0], [847.0, 207.0], [833.0, 180.5], [832.0, 182.375], [836.0, 193.5], [835.0, 189.75], [844.0, 208.33333333333334], [841.0, 198.0], [855.0, 158.0], [854.0, 227.70000000000002], [853.0, 163.0], [849.0, 170.0], [893.0, 192.0], [895.0, 197.33333333333334], [892.0, 231.5], [890.0, 145.0], [887.0, 171.0], [885.0, 190.0], [884.0, 193.5], [879.0, 183.93333333333334], [864.0, 189.22222222222223], [869.0, 193.0], [867.0, 193.66666666666666], [878.0, 190.5], [877.0, 151.5], [876.0, 195.75], [875.0, 191.85714285714286], [874.0, 193.5], [873.0, 185.65217391304347], [926.0, 200.0], [927.0, 192.0], [923.0, 202.0], [900.0, 149.0], [899.0, 196.66666666666666], [919.0, 175.0], [916.0, 195.0], [914.0, 190.0], [912.0, 188.0], [910.0, 187.5], [908.0, 146.0], [905.0, 190.0], [904.0, 162.5], [953.0, 195.33333333333334], [957.0, 173.66666666666666], [959.0, 193.0], [956.0, 192.0], [951.0, 188.5], [944.0, 197.0], [943.0, 170.8], [931.0, 144.0], [928.0, 142.0], [934.0, 197.5], [933.0, 188.0], [942.0, 202.0], [940.0, 310.66666666666663], [988.0, 189.66666666666666], [983.0, 187.0], [982.0, 180.75], [981.0, 196.0], [974.0, 193.0], [960.0, 188.75], [973.0, 187.0], [972.0, 192.0], [967.0, 164.0], [965.0, 188.0], [964.0, 191.66666666666666], [962.0, 181.85714285714283], [1000.0, 86.86148221338897], [999.0, 222.0], [998.0, 226.0], [997.0, 180.0], [994.0, 190.0], [993.0, 188.16666666666669], [992.0, 185.1], [1.0, 10.0]], "isOverall": false, "label": "MakePDF", "isController": false}, {"data": [[999.465216004215, 86.99500530210481]], "isOverall": false, "label": "MakePDF-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1000.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.76889174E12, "maxY": 6.781669125E7, "series": [{"data": [[1.7688918E12, 6.781669125E7], [1.76889186E12, 1.297889835E7], [1.76889174E12, 4.597932231666667E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7688918E12, 0.0], [1.76889186E12, 0.0], [1.76889174E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76889186E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 72.15987838707821, "minX": 1.76889174E12, "maxY": 93.10398193909417, "series": [{"data": [[1.7688918E12, 93.10398193909417], [1.76889186E12, 89.93582778545421], [1.76889174E12, 72.15987838707821]], "isOverall": false, "label": "MakePDF", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76889186E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.76889174E12, "maxY": 4.9E-324, "series": [{"data": [[1.7688918E12, 0.0], [1.76889186E12, 0.0], [1.76889174E12, 0.0]], "isOverall": false, "label": "MakePDF", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76889186E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.76889174E12, "maxY": 4.9E-324, "series": [{"data": [[1.7688918E12, 0.0], [1.76889186E12, 0.0], [1.76889174E12, 0.0]], "isOverall": false, "label": "MakePDF", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76889186E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 4.0, "minX": 1.76889174E12, "maxY": 872.0, "series": [{"data": [[1.7688918E12, 872.0], [1.76889186E12, 817.0], [1.76889174E12, 776.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7688918E12, 39.0], [1.76889186E12, 4.0], [1.76889174E12, 15.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7688918E12, 195.0], [1.76889186E12, 242.0], [1.76889174E12, 112.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7688918E12, 239.0], [1.76889186E12, 319.0], [1.76889174E12, 152.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7688918E12, 168.0], [1.76889186E12, 203.0], [1.76889174E12, 89.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7688918E12, 203.0], [1.76889186E12, 259.0], [1.76889174E12, 124.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76889186E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 387.0, "series": [{"data": [[5.0, 6.0], [6.0, 6.0], [7.0, 6.0], [25.0, 387.0], [9081.0, 180.0], [9559.0, 217.0], [9927.0, 187.0], [10001.0, 170.0], [9813.0, 163.0], [9871.0, 187.0], [10751.0, 147.0], [10517.0, 136.0], [10471.0, 166.0], [10325.0, 178.0], [10689.0, 162.0], [10651.0, 170.0], [10513.0, 203.0], [10317.0, 212.0], [10265.0, 203.0], [11017.0, 168.0], [11411.0, 143.0], [1726.0, 124.0], [4051.0, 76.0], [4075.0, 77.0], [4342.0, 120.0], [4518.0, 73.0], [4560.0, 74.0], [4494.0, 121.0], [4599.0, 116.0], [4550.0, 126.0], [4662.0, 68.0], [4747.0, 73.0], [4712.0, 116.0], [4726.0, 125.0], [4757.0, 125.0], [5054.0, 68.0], [5111.0, 100.0], [4964.0, 112.0], [4895.0, 120.0], [5023.0, 121.0], [5100.0, 124.0], [5313.0, 110.0], [5143.0, 70.0], [5244.0, 96.0], [5323.0, 96.0], [5320.0, 123.0], [5154.0, 102.0], [5137.0, 104.0], [5170.0, 117.0], [5241.0, 118.0], [5224.0, 134.0], [5337.0, 118.0], [5328.0, 117.0], [5439.0, 89.0], [5452.0, 61.0], [5597.0, 83.0], [5604.0, 125.0], [5512.0, 122.0], [5556.0, 121.0], [5568.0, 90.0], [5394.0, 91.0], [5385.0, 95.0], [5464.0, 104.0], [5415.0, 120.0], [5389.0, 118.0], [5851.0, 113.0], [5757.0, 116.0], [5831.0, 112.0], [5776.0, 116.0], [5797.0, 117.0], [6043.0, 63.0], [5964.0, 77.0], [5994.0, 123.0], [6343.0, 61.0], [6251.0, 59.0], [6209.0, 76.0], [6383.0, 60.0], [6177.0, 64.0], [6336.0, 65.0], [6181.0, 67.0], [6387.0, 67.0], [6191.0, 71.0], [6364.0, 68.0], [6360.0, 72.0], [6489.0, 56.0], [6595.0, 61.0], [6648.0, 62.0], [6428.0, 68.0], [6552.0, 70.0], [6520.0, 72.0], [6405.0, 75.0], [6699.0, 58.0], [7046.0, 52.0], [7408.0, 208.0], [8946.0, 130.0], [9700.0, 169.0], [9428.0, 198.0], [9756.0, 160.0], [9916.0, 176.0], [9980.0, 188.0], [10638.0, 152.0], [10508.0, 154.0], [10378.0, 171.0], [10456.0, 122.0], [10392.0, 181.0], [10500.0, 189.0], [10520.0, 198.0], [11018.0, 152.0], [11088.0, 157.0], [11070.0, 154.0], [10980.0, 179.0], [11390.0, 164.0], [1.0, 10.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8946.0, 0.0], [9081.0, 0.0], [9700.0, 0.0], [9428.0, 0.0], [9559.0, 0.0], [9927.0, 0.0], [10001.0, 0.0], [9756.0, 0.0], [9813.0, 0.0], [9916.0, 0.0], [9980.0, 0.0], [9871.0, 0.0], [10638.0, 0.0], [10508.0, 0.0], [10500.0, 0.0], [10378.0, 0.0], [10751.0, 0.0], [10517.0, 0.0], [10513.0, 0.0], [10520.0, 0.0], [10456.0, 0.0], [10471.0, 0.0], [10265.0, 0.0], [10325.0, 0.0], [10317.0, 0.0], [10392.0, 0.0], [10689.0, 0.0], [10651.0, 0.0], [11018.0, 0.0], [11088.0, 0.0], [11017.0, 0.0], [11070.0, 0.0], [10980.0, 0.0], [11411.0, 0.0], [11390.0, 0.0], [7408.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11411.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 4.9E-324, "series": [{"data": [[5.0, 0.0], [6.0, 0.0], [7.0, 0.0], [25.0, 0.0], [9081.0, 0.0], [9559.0, 0.0], [9927.0, 0.0], [10001.0, 0.0], [9813.0, 0.0], [9871.0, 0.0], [10751.0, 0.0], [10517.0, 0.0], [10471.0, 0.0], [10325.0, 0.0], [10689.0, 0.0], [10651.0, 0.0], [10513.0, 0.0], [10317.0, 0.0], [10265.0, 0.0], [11017.0, 0.0], [11411.0, 0.0], [1726.0, 0.0], [4051.0, 0.0], [4075.0, 0.0], [4342.0, 0.0], [4518.0, 0.0], [4560.0, 0.0], [4494.0, 0.0], [4599.0, 0.0], [4550.0, 0.0], [4662.0, 0.0], [4747.0, 0.0], [4712.0, 0.0], [4726.0, 0.0], [4757.0, 0.0], [5054.0, 0.0], [5111.0, 0.0], [4964.0, 0.0], [4895.0, 0.0], [5023.0, 0.0], [5100.0, 0.0], [5313.0, 0.0], [5143.0, 0.0], [5244.0, 0.0], [5323.0, 0.0], [5320.0, 0.0], [5154.0, 0.0], [5137.0, 0.0], [5170.0, 0.0], [5241.0, 0.0], [5224.0, 0.0], [5337.0, 0.0], [5328.0, 0.0], [5439.0, 0.0], [5452.0, 0.0], [5597.0, 0.0], [5604.0, 0.0], [5512.0, 0.0], [5556.0, 0.0], [5568.0, 0.0], [5394.0, 0.0], [5385.0, 0.0], [5464.0, 0.0], [5415.0, 0.0], [5389.0, 0.0], [5851.0, 0.0], [5757.0, 0.0], [5831.0, 0.0], [5776.0, 0.0], [5797.0, 0.0], [6043.0, 0.0], [5964.0, 0.0], [5994.0, 0.0], [6343.0, 0.0], [6251.0, 0.0], [6209.0, 0.0], [6383.0, 0.0], [6177.0, 0.0], [6336.0, 0.0], [6181.0, 0.0], [6387.0, 0.0], [6191.0, 0.0], [6364.0, 0.0], [6360.0, 0.0], [6489.0, 0.0], [6595.0, 0.0], [6648.0, 0.0], [6428.0, 0.0], [6552.0, 0.0], [6520.0, 0.0], [6405.0, 0.0], [6699.0, 0.0], [7046.0, 0.0], [7408.0, 0.0], [8946.0, 0.0], [9700.0, 0.0], [9428.0, 0.0], [9756.0, 0.0], [9916.0, 0.0], [9980.0, 0.0], [10638.0, 0.0], [10508.0, 0.0], [10378.0, 0.0], [10456.0, 0.0], [10392.0, 0.0], [10500.0, 0.0], [10520.0, 0.0], [11018.0, 0.0], [11088.0, 0.0], [11070.0, 0.0], [10980.0, 0.0], [11390.0, 0.0], [1.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[8946.0, 0.0], [9081.0, 0.0], [9700.0, 0.0], [9428.0, 0.0], [9559.0, 0.0], [9927.0, 0.0], [10001.0, 0.0], [9756.0, 0.0], [9813.0, 0.0], [9916.0, 0.0], [9980.0, 0.0], [9871.0, 0.0], [10638.0, 0.0], [10508.0, 0.0], [10500.0, 0.0], [10378.0, 0.0], [10751.0, 0.0], [10517.0, 0.0], [10513.0, 0.0], [10520.0, 0.0], [10456.0, 0.0], [10471.0, 0.0], [10265.0, 0.0], [10325.0, 0.0], [10317.0, 0.0], [10392.0, 0.0], [10689.0, 0.0], [10651.0, 0.0], [11018.0, 0.0], [11088.0, 0.0], [11017.0, 0.0], [11070.0, 0.0], [10980.0, 0.0], [11411.0, 0.0], [11390.0, 0.0], [7408.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11411.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2108.7, "minX": 1.76889174E12, "maxY": 7343.816666666667, "series": [{"data": [[1.7688918E12, 7343.816666666667], [1.76889186E12, 2108.7], [1.76889174E12, 3451.1666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76889186E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 968.45, "minX": 1.76889174E12, "maxY": 5083.366666666667, "series": [{"data": [[1.7688918E12, 5083.366666666667], [1.76889186E12, 968.45], [1.76889174E12, 3442.616666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7688918E12, 2254.766666666667], [1.76889186E12, 1154.4833333333333]], "isOverall": false, "label": " 500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76889186E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 968.45, "minX": 1.76889174E12, "maxY": 5083.366666666667, "series": [{"data": [[1.7688918E12, 2254.766666666667], [1.76889186E12, 1154.4833333333333]], "isOverall": false, "label": "MakePDF-failure", "isController": false}, {"data": [[1.7688918E12, 5083.366666666667], [1.76889186E12, 968.45], [1.76889174E12, 3442.616666666667]], "isOverall": false, "label": "MakePDF-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76889186E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 968.45, "minX": 1.76889174E12, "maxY": 5083.366666666667, "series": [{"data": [[1.7688918E12, 5083.366666666667], [1.76889186E12, 968.45], [1.76889174E12, 3442.616666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7688918E12, 2254.766666666667], [1.76889186E12, 1154.4833333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76889186E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

