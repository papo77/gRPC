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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 504.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 2.0], [2.6, 2.0], [2.7, 2.0], [2.8, 2.0], [2.9, 2.0], [3.0, 2.0], [3.1, 2.0], [3.2, 2.0], [3.3, 2.0], [3.4, 2.0], [3.5, 2.0], [3.6, 2.0], [3.7, 2.0], [3.8, 2.0], [3.9, 2.0], [4.0, 2.0], [4.1, 2.0], [4.2, 2.0], [4.3, 2.0], [4.4, 2.0], [4.5, 2.0], [4.6, 2.0], [4.7, 2.0], [4.8, 2.0], [4.9, 2.0], [5.0, 2.0], [5.1, 3.0], [5.2, 3.0], [5.3, 3.0], [5.4, 3.0], [5.5, 3.0], [5.6, 3.0], [5.7, 3.0], [5.8, 3.0], [5.9, 3.0], [6.0, 3.0], [6.1, 3.0], [6.2, 3.0], [6.3, 3.0], [6.4, 3.0], [6.5, 3.0], [6.6, 3.0], [6.7, 3.0], [6.8, 3.0], [6.9, 3.0], [7.0, 3.0], [7.1, 3.0], [7.2, 4.0], [7.3, 4.0], [7.4, 4.0], [7.5, 4.0], [7.6, 4.0], [7.7, 4.0], [7.8, 4.0], [7.9, 4.0], [8.0, 4.0], [8.1, 4.0], [8.2, 4.0], [8.3, 4.0], [8.4, 4.0], [8.5, 4.0], [8.6, 4.0], [8.7, 4.0], [8.8, 4.0], [8.9, 5.0], [9.0, 5.0], [9.1, 5.0], [9.2, 5.0], [9.3, 5.0], [9.4, 5.0], [9.5, 5.0], [9.6, 5.0], [9.7, 5.0], [9.8, 5.0], [9.9, 5.0], [10.0, 5.0], [10.1, 5.0], [10.2, 6.0], [10.3, 6.0], [10.4, 6.0], [10.5, 6.0], [10.6, 6.0], [10.7, 6.0], [10.8, 6.0], [10.9, 6.0], [11.0, 6.0], [11.1, 6.0], [11.2, 6.0], [11.3, 6.0], [11.4, 7.0], [11.5, 7.0], [11.6, 7.0], [11.7, 7.0], [11.8, 7.0], [11.9, 7.0], [12.0, 7.0], [12.1, 7.0], [12.2, 7.0], [12.3, 7.0], [12.4, 7.0], [12.5, 8.0], [12.6, 8.0], [12.7, 8.0], [12.8, 8.0], [12.9, 8.0], [13.0, 8.0], [13.1, 8.0], [13.2, 8.0], [13.3, 8.0], [13.4, 8.0], [13.5, 8.0], [13.6, 9.0], [13.7, 9.0], [13.8, 9.0], [13.9, 9.0], [14.0, 9.0], [14.1, 9.0], [14.2, 9.0], [14.3, 9.0], [14.4, 9.0], [14.5, 9.0], [14.6, 9.0], [14.7, 10.0], [14.8, 10.0], [14.9, 10.0], [15.0, 10.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 10.0], [15.5, 10.0], [15.6, 10.0], [15.7, 10.0], [15.8, 11.0], [15.9, 11.0], [16.0, 11.0], [16.1, 11.0], [16.2, 11.0], [16.3, 11.0], [16.4, 11.0], [16.5, 11.0], [16.6, 11.0], [16.7, 11.0], [16.8, 11.0], [16.9, 11.0], [17.0, 12.0], [17.1, 12.0], [17.2, 12.0], [17.3, 12.0], [17.4, 12.0], [17.5, 12.0], [17.6, 12.0], [17.7, 12.0], [17.8, 12.0], [17.9, 12.0], [18.0, 12.0], [18.1, 13.0], [18.2, 13.0], [18.3, 13.0], [18.4, 13.0], [18.5, 13.0], [18.6, 13.0], [18.7, 13.0], [18.8, 13.0], [18.9, 13.0], [19.0, 13.0], [19.1, 13.0], [19.2, 14.0], [19.3, 14.0], [19.4, 14.0], [19.5, 14.0], [19.6, 14.0], [19.7, 14.0], [19.8, 14.0], [19.9, 14.0], [20.0, 14.0], [20.1, 14.0], [20.2, 15.0], [20.3, 15.0], [20.4, 15.0], [20.5, 15.0], [20.6, 15.0], [20.7, 15.0], [20.8, 15.0], [20.9, 15.0], [21.0, 15.0], [21.1, 15.0], [21.2, 16.0], [21.3, 16.0], [21.4, 16.0], [21.5, 16.0], [21.6, 16.0], [21.7, 16.0], [21.8, 16.0], [21.9, 16.0], [22.0, 16.0], [22.1, 16.0], [22.2, 16.0], [22.3, 17.0], [22.4, 17.0], [22.5, 17.0], [22.6, 17.0], [22.7, 17.0], [22.8, 17.0], [22.9, 17.0], [23.0, 17.0], [23.1, 17.0], [23.2, 17.0], [23.3, 18.0], [23.4, 18.0], [23.5, 18.0], [23.6, 18.0], [23.7, 18.0], [23.8, 18.0], [23.9, 18.0], [24.0, 18.0], [24.1, 18.0], [24.2, 18.0], [24.3, 19.0], [24.4, 19.0], [24.5, 19.0], [24.6, 19.0], [24.7, 19.0], [24.8, 19.0], [24.9, 19.0], [25.0, 19.0], [25.1, 19.0], [25.2, 19.0], [25.3, 20.0], [25.4, 20.0], [25.5, 20.0], [25.6, 20.0], [25.7, 20.0], [25.8, 20.0], [25.9, 20.0], [26.0, 20.0], [26.1, 20.0], [26.2, 20.0], [26.3, 21.0], [26.4, 21.0], [26.5, 21.0], [26.6, 21.0], [26.7, 21.0], [26.8, 21.0], [26.9, 21.0], [27.0, 21.0], [27.1, 21.0], [27.2, 21.0], [27.3, 21.0], [27.4, 22.0], [27.5, 22.0], [27.6, 22.0], [27.7, 22.0], [27.8, 22.0], [27.9, 22.0], [28.0, 22.0], [28.1, 22.0], [28.2, 22.0], [28.3, 22.0], [28.4, 23.0], [28.5, 23.0], [28.6, 23.0], [28.7, 23.0], [28.8, 23.0], [28.9, 23.0], [29.0, 23.0], [29.1, 23.0], [29.2, 23.0], [29.3, 23.0], [29.4, 23.0], [29.5, 24.0], [29.6, 24.0], [29.7, 24.0], [29.8, 24.0], [29.9, 24.0], [30.0, 24.0], [30.1, 24.0], [30.2, 24.0], [30.3, 24.0], [30.4, 24.0], [30.5, 24.0], [30.6, 24.0], [30.7, 25.0], [30.8, 25.0], [30.9, 25.0], [31.0, 25.0], [31.1, 25.0], [31.2, 25.0], [31.3, 25.0], [31.4, 25.0], [31.5, 25.0], [31.6, 25.0], [31.7, 25.0], [31.8, 26.0], [31.9, 26.0], [32.0, 26.0], [32.1, 26.0], [32.2, 26.0], [32.3, 26.0], [32.4, 26.0], [32.5, 26.0], [32.6, 26.0], [32.7, 26.0], [32.8, 26.0], [32.9, 26.0], [33.0, 26.0], [33.1, 27.0], [33.2, 27.0], [33.3, 27.0], [33.4, 27.0], [33.5, 27.0], [33.6, 27.0], [33.7, 27.0], [33.8, 27.0], [33.9, 27.0], [34.0, 27.0], [34.1, 27.0], [34.2, 27.0], [34.3, 28.0], [34.4, 28.0], [34.5, 28.0], [34.6, 28.0], [34.7, 28.0], [34.8, 28.0], [34.9, 28.0], [35.0, 28.0], [35.1, 28.0], [35.2, 28.0], [35.3, 28.0], [35.4, 28.0], [35.5, 28.0], [35.6, 29.0], [35.7, 29.0], [35.8, 29.0], [35.9, 29.0], [36.0, 29.0], [36.1, 29.0], [36.2, 29.0], [36.3, 29.0], [36.4, 29.0], [36.5, 29.0], [36.6, 29.0], [36.7, 29.0], [36.8, 29.0], [36.9, 30.0], [37.0, 30.0], [37.1, 30.0], [37.2, 30.0], [37.3, 30.0], [37.4, 30.0], [37.5, 30.0], [37.6, 30.0], [37.7, 30.0], [37.8, 30.0], [37.9, 30.0], [38.0, 30.0], [38.1, 31.0], [38.2, 31.0], [38.3, 31.0], [38.4, 31.0], [38.5, 31.0], [38.6, 31.0], [38.7, 31.0], [38.8, 31.0], [38.9, 31.0], [39.0, 31.0], [39.1, 31.0], [39.2, 32.0], [39.3, 32.0], [39.4, 32.0], [39.5, 32.0], [39.6, 32.0], [39.7, 32.0], [39.8, 32.0], [39.9, 32.0], [40.0, 32.0], [40.1, 32.0], [40.2, 32.0], [40.3, 32.0], [40.4, 33.0], [40.5, 33.0], [40.6, 33.0], [40.7, 33.0], [40.8, 33.0], [40.9, 33.0], [41.0, 33.0], [41.1, 33.0], [41.2, 33.0], [41.3, 33.0], [41.4, 33.0], [41.5, 33.0], [41.6, 34.0], [41.7, 34.0], [41.8, 34.0], [41.9, 34.0], [42.0, 34.0], [42.1, 34.0], [42.2, 34.0], [42.3, 34.0], [42.4, 34.0], [42.5, 34.0], [42.6, 34.0], [42.7, 35.0], [42.8, 35.0], [42.9, 35.0], [43.0, 35.0], [43.1, 35.0], [43.2, 35.0], [43.3, 35.0], [43.4, 35.0], [43.5, 35.0], [43.6, 35.0], [43.7, 35.0], [43.8, 36.0], [43.9, 36.0], [44.0, 36.0], [44.1, 36.0], [44.2, 36.0], [44.3, 36.0], [44.4, 36.0], [44.5, 36.0], [44.6, 36.0], [44.7, 36.0], [44.8, 36.0], [44.9, 37.0], [45.0, 37.0], [45.1, 37.0], [45.2, 37.0], [45.3, 37.0], [45.4, 37.0], [45.5, 37.0], [45.6, 37.0], [45.7, 37.0], [45.8, 37.0], [45.9, 38.0], [46.0, 38.0], [46.1, 38.0], [46.2, 38.0], [46.3, 38.0], [46.4, 38.0], [46.5, 38.0], [46.6, 38.0], [46.7, 38.0], [46.8, 38.0], [46.9, 39.0], [47.0, 39.0], [47.1, 39.0], [47.2, 39.0], [47.3, 39.0], [47.4, 39.0], [47.5, 39.0], [47.6, 39.0], [47.7, 39.0], [47.8, 39.0], [47.9, 40.0], [48.0, 40.0], [48.1, 40.0], [48.2, 40.0], [48.3, 40.0], [48.4, 40.0], [48.5, 40.0], [48.6, 40.0], [48.7, 40.0], [48.8, 40.0], [48.9, 41.0], [49.0, 41.0], [49.1, 41.0], [49.2, 41.0], [49.3, 41.0], [49.4, 41.0], [49.5, 41.0], [49.6, 41.0], [49.7, 41.0], [49.8, 42.0], [49.9, 42.0], [50.0, 42.0], [50.1, 42.0], [50.2, 42.0], [50.3, 42.0], [50.4, 42.0], [50.5, 42.0], [50.6, 42.0], [50.7, 43.0], [50.8, 43.0], [50.9, 43.0], [51.0, 43.0], [51.1, 43.0], [51.2, 43.0], [51.3, 43.0], [51.4, 43.0], [51.5, 43.0], [51.6, 44.0], [51.7, 44.0], [51.8, 44.0], [51.9, 44.0], [52.0, 44.0], [52.1, 44.0], [52.2, 44.0], [52.3, 44.0], [52.4, 44.0], [52.5, 45.0], [52.6, 45.0], [52.7, 45.0], [52.8, 45.0], [52.9, 45.0], [53.0, 45.0], [53.1, 45.0], [53.2, 45.0], [53.3, 45.0], [53.4, 46.0], [53.5, 46.0], [53.6, 46.0], [53.7, 46.0], [53.8, 46.0], [53.9, 46.0], [54.0, 46.0], [54.1, 46.0], [54.2, 47.0], [54.3, 47.0], [54.4, 47.0], [54.5, 47.0], [54.6, 47.0], [54.7, 47.0], [54.8, 47.0], [54.9, 47.0], [55.0, 47.0], [55.1, 48.0], [55.2, 48.0], [55.3, 48.0], [55.4, 48.0], [55.5, 48.0], [55.6, 48.0], [55.7, 48.0], [55.8, 48.0], [55.9, 49.0], [56.0, 49.0], [56.1, 49.0], [56.2, 49.0], [56.3, 49.0], [56.4, 49.0], [56.5, 49.0], [56.6, 49.0], [56.7, 50.0], [56.8, 50.0], [56.9, 50.0], [57.0, 50.0], [57.1, 50.0], [57.2, 50.0], [57.3, 50.0], [57.4, 50.0], [57.5, 51.0], [57.6, 51.0], [57.7, 51.0], [57.8, 51.0], [57.9, 51.0], [58.0, 51.0], [58.1, 51.0], [58.2, 51.0], [58.3, 52.0], [58.4, 52.0], [58.5, 52.0], [58.6, 52.0], [58.7, 52.0], [58.8, 52.0], [58.9, 52.0], [59.0, 52.0], [59.1, 53.0], [59.2, 53.0], [59.3, 53.0], [59.4, 53.0], [59.5, 53.0], [59.6, 53.0], [59.7, 53.0], [59.8, 53.0], [59.9, 54.0], [60.0, 54.0], [60.1, 54.0], [60.2, 54.0], [60.3, 54.0], [60.4, 54.0], [60.5, 54.0], [60.6, 55.0], [60.7, 55.0], [60.8, 55.0], [60.9, 55.0], [61.0, 55.0], [61.1, 55.0], [61.2, 55.0], [61.3, 55.0], [61.4, 56.0], [61.5, 56.0], [61.6, 56.0], [61.7, 56.0], [61.8, 56.0], [61.9, 56.0], [62.0, 56.0], [62.1, 56.0], [62.2, 57.0], [62.3, 57.0], [62.4, 57.0], [62.5, 57.0], [62.6, 57.0], [62.7, 57.0], [62.8, 57.0], [62.9, 58.0], [63.0, 58.0], [63.1, 58.0], [63.2, 58.0], [63.3, 58.0], [63.4, 58.0], [63.5, 58.0], [63.6, 59.0], [63.7, 59.0], [63.8, 59.0], [63.9, 59.0], [64.0, 59.0], [64.1, 59.0], [64.2, 59.0], [64.3, 59.0], [64.4, 60.0], [64.5, 60.0], [64.6, 60.0], [64.7, 60.0], [64.8, 60.0], [64.9, 60.0], [65.0, 60.0], [65.1, 61.0], [65.2, 61.0], [65.3, 61.0], [65.4, 61.0], [65.5, 61.0], [65.6, 61.0], [65.7, 61.0], [65.8, 62.0], [65.9, 62.0], [66.0, 62.0], [66.1, 62.0], [66.2, 62.0], [66.3, 62.0], [66.4, 62.0], [66.5, 63.0], [66.6, 63.0], [66.7, 63.0], [66.8, 63.0], [66.9, 63.0], [67.0, 63.0], [67.1, 64.0], [67.2, 64.0], [67.3, 64.0], [67.4, 64.0], [67.5, 64.0], [67.6, 64.0], [67.7, 64.0], [67.8, 65.0], [67.9, 65.0], [68.0, 65.0], [68.1, 65.0], [68.2, 65.0], [68.3, 65.0], [68.4, 65.0], [68.5, 66.0], [68.6, 66.0], [68.7, 66.0], [68.8, 66.0], [68.9, 66.0], [69.0, 66.0], [69.1, 67.0], [69.2, 67.0], [69.3, 67.0], [69.4, 67.0], [69.5, 67.0], [69.6, 67.0], [69.7, 67.0], [69.8, 68.0], [69.9, 68.0], [70.0, 68.0], [70.1, 68.0], [70.2, 68.0], [70.3, 68.0], [70.4, 69.0], [70.5, 69.0], [70.6, 69.0], [70.7, 69.0], [70.8, 69.0], [70.9, 69.0], [71.0, 70.0], [71.1, 70.0], [71.2, 70.0], [71.3, 70.0], [71.4, 70.0], [71.5, 70.0], [71.6, 70.0], [71.7, 71.0], [71.8, 71.0], [71.9, 71.0], [72.0, 71.0], [72.1, 71.0], [72.2, 71.0], [72.3, 72.0], [72.4, 72.0], [72.5, 72.0], [72.6, 72.0], [72.7, 72.0], [72.8, 72.0], [72.9, 73.0], [73.0, 73.0], [73.1, 73.0], [73.2, 73.0], [73.3, 73.0], [73.4, 73.0], [73.5, 74.0], [73.6, 74.0], [73.7, 74.0], [73.8, 74.0], [73.9, 74.0], [74.0, 74.0], [74.1, 75.0], [74.2, 75.0], [74.3, 75.0], [74.4, 75.0], [74.5, 75.0], [74.6, 75.0], [74.7, 76.0], [74.8, 76.0], [74.9, 76.0], [75.0, 76.0], [75.1, 76.0], [75.2, 76.0], [75.3, 77.0], [75.4, 77.0], [75.5, 77.0], [75.6, 77.0], [75.7, 77.0], [75.8, 77.0], [75.9, 78.0], [76.0, 78.0], [76.1, 78.0], [76.2, 78.0], [76.3, 78.0], [76.4, 79.0], [76.5, 79.0], [76.6, 79.0], [76.7, 79.0], [76.8, 79.0], [76.9, 79.0], [77.0, 80.0], [77.1, 80.0], [77.2, 80.0], [77.3, 80.0], [77.4, 80.0], [77.5, 81.0], [77.6, 81.0], [77.7, 81.0], [77.8, 81.0], [77.9, 81.0], [78.0, 82.0], [78.1, 82.0], [78.2, 82.0], [78.3, 82.0], [78.4, 82.0], [78.5, 82.0], [78.6, 83.0], [78.7, 83.0], [78.8, 83.0], [78.9, 83.0], [79.0, 83.0], [79.1, 84.0], [79.2, 84.0], [79.3, 84.0], [79.4, 84.0], [79.5, 84.0], [79.6, 85.0], [79.7, 85.0], [79.8, 85.0], [79.9, 85.0], [80.0, 86.0], [80.1, 86.0], [80.2, 86.0], [80.3, 86.0], [80.4, 86.0], [80.5, 87.0], [80.6, 87.0], [80.7, 87.0], [80.8, 87.0], [80.9, 88.0], [81.0, 88.0], [81.1, 88.0], [81.2, 88.0], [81.3, 88.0], [81.4, 89.0], [81.5, 89.0], [81.6, 89.0], [81.7, 89.0], [81.8, 89.0], [81.9, 90.0], [82.0, 90.0], [82.1, 90.0], [82.2, 90.0], [82.3, 91.0], [82.4, 91.0], [82.5, 91.0], [82.6, 91.0], [82.7, 91.0], [82.8, 92.0], [82.9, 92.0], [83.0, 92.0], [83.1, 92.0], [83.2, 93.0], [83.3, 93.0], [83.4, 93.0], [83.5, 93.0], [83.6, 94.0], [83.7, 94.0], [83.8, 94.0], [83.9, 94.0], [84.0, 95.0], [84.1, 95.0], [84.2, 95.0], [84.3, 95.0], [84.4, 96.0], [84.5, 96.0], [84.6, 96.0], [84.7, 96.0], [84.8, 96.0], [84.9, 97.0], [85.0, 97.0], [85.1, 97.0], [85.2, 98.0], [85.3, 98.0], [85.4, 98.0], [85.5, 98.0], [85.6, 99.0], [85.7, 99.0], [85.8, 99.0], [85.9, 99.0], [86.0, 100.0], [86.1, 100.0], [86.2, 100.0], [86.3, 101.0], [86.4, 101.0], [86.5, 101.0], [86.6, 101.0], [86.7, 102.0], [86.8, 102.0], [86.9, 102.0], [87.0, 103.0], [87.1, 103.0], [87.2, 103.0], [87.3, 103.0], [87.4, 104.0], [87.5, 104.0], [87.6, 104.0], [87.7, 105.0], [87.8, 105.0], [87.9, 105.0], [88.0, 106.0], [88.1, 106.0], [88.2, 106.0], [88.3, 107.0], [88.4, 107.0], [88.5, 107.0], [88.6, 108.0], [88.7, 108.0], [88.8, 108.0], [88.9, 109.0], [89.0, 109.0], [89.1, 109.0], [89.2, 110.0], [89.3, 110.0], [89.4, 110.0], [89.5, 111.0], [89.6, 111.0], [89.7, 111.0], [89.8, 112.0], [89.9, 112.0], [90.0, 113.0], [90.1, 113.0], [90.2, 113.0], [90.3, 114.0], [90.4, 114.0], [90.5, 115.0], [90.6, 115.0], [90.7, 115.0], [90.8, 116.0], [90.9, 116.0], [91.0, 117.0], [91.1, 117.0], [91.2, 117.0], [91.3, 118.0], [91.4, 118.0], [91.5, 119.0], [91.6, 119.0], [91.7, 120.0], [91.8, 120.0], [91.9, 120.0], [92.0, 121.0], [92.1, 121.0], [92.2, 122.0], [92.3, 122.0], [92.4, 123.0], [92.5, 123.0], [92.6, 124.0], [92.7, 124.0], [92.8, 125.0], [92.9, 125.0], [93.0, 126.0], [93.1, 126.0], [93.2, 127.0], [93.3, 127.0], [93.4, 128.0], [93.5, 128.0], [93.6, 129.0], [93.7, 129.0], [93.8, 130.0], [93.9, 130.0], [94.0, 131.0], [94.1, 132.0], [94.2, 132.0], [94.3, 133.0], [94.4, 133.0], [94.5, 134.0], [94.6, 135.0], [94.7, 135.0], [94.8, 136.0], [94.9, 137.0], [95.0, 137.0], [95.1, 138.0], [95.2, 139.0], [95.3, 139.0], [95.4, 140.0], [95.5, 141.0], [95.6, 142.0], [95.7, 142.0], [95.8, 143.0], [95.9, 144.0], [96.0, 144.0], [96.1, 145.0], [96.2, 146.0], [96.3, 147.0], [96.4, 148.0], [96.5, 149.0], [96.6, 149.0], [96.7, 150.0], [96.8, 151.0], [96.9, 152.0], [97.0, 153.0], [97.1, 154.0], [97.2, 155.0], [97.3, 157.0], [97.4, 158.0], [97.5, 159.0], [97.6, 160.0], [97.7, 161.0], [97.8, 163.0], [97.9, 164.0], [98.0, 166.0], [98.1, 167.0], [98.2, 169.0], [98.3, 170.0], [98.4, 172.0], [98.5, 174.0], [98.6, 176.0], [98.7, 178.0], [98.8, 180.0], [98.9, 183.0], [99.0, 186.0], [99.1, 189.0], [99.2, 192.0], [99.3, 196.0], [99.4, 201.0], [99.5, 206.0], [99.6, 212.0], [99.7, 221.0], [99.8, 233.0], [99.9, 251.0]], "isOverall": false, "label": "MakePDF", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 665345.0, "series": [{"data": [[0.0, 665345.0], [300.0, 105.0], [100.0, 103993.0], [200.0, 4763.0], [400.0, 4.0], [500.0, 11.0]], "isOverall": false, "label": "MakePDF", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 774210.0, "series": [{"data": [[0.0, 774210.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 11.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 953.8560655311408, "minX": 1.7693997E12, "maxY": 1000.0, "series": [{"data": [[1.76939982E12, 953.8560655311408], [1.76939976E12, 1000.0], [1.7693997E12, 1000.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76939982E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "maxY": 219.0, "series": [{"data": [[2.0, 2.0], [3.0, 2.0], [4.0, 2.0], [5.0, 2.0], [6.0, 2.0], [7.0, 2.0], [8.0, 2.0], [9.0, 3.0], [10.0, 2.0], [11.0, 3.0], [12.0, 2.0], [13.0, 3.0], [14.0, 2.0], [15.0, 3.0], [16.0, 2.0], [17.0, 2.0], [18.0, 3.0], [19.0, 2.0], [20.0, 1.0], [21.0, 2.0], [22.0, 2.0], [23.0, 2.0], [24.0, 2.0], [25.0, 2.0], [26.0, 1.0], [27.0, 2.0], [28.0, 2.0], [29.0, 2.0], [30.0, 2.0], [31.0, 2.0], [33.0, 2.0], [32.0, 1.0], [35.0, 3.0], [34.0, 3.0], [37.0, 3.0], [36.0, 2.0], [39.0, 2.0], [38.0, 3.0], [41.0, 3.0], [40.0, 3.0], [43.0, 2.0], [42.0, 2.0], [45.0, 2.0], [44.0, 1.0], [47.0, 2.0], [46.0, 2.0], [49.0, 2.0], [48.0, 2.0], [51.0, 4.0], [50.0, 1.0], [53.0, 3.0], [52.0, 2.0], [55.0, 2.0], [54.0, 2.0], [57.0, 2.0], [56.0, 1.0], [59.0, 2.0], [58.0, 1.0], [61.0, 2.0], [60.0, 2.0], [63.0, 2.0], [62.0, 2.0], [67.0, 3.0], [66.0, 2.0], [65.0, 2.0], [64.0, 2.0], [71.0, 1.0], [70.0, 2.0], [69.0, 2.0], [68.0, 2.0], [75.0, 2.0], [74.0, 2.0], [73.0, 2.0], [72.0, 2.0], [79.0, 1.0], [78.0, 1.0], [77.0, 2.0], [76.0, 2.0], [83.0, 2.0], [82.0, 2.0], [81.0, 2.0], [80.0, 2.0], [87.0, 2.0], [86.0, 3.0], [85.0, 2.0], [84.0, 2.0], [91.0, 1.0], [90.0, 2.0], [89.0, 3.0], [88.0, 3.0], [95.0, 3.0], [94.0, 2.0], [93.0, 2.0], [92.0, 2.0], [99.0, 2.0], [98.0, 1.0], [97.0, 2.0], [96.0, 3.0], [103.0, 2.0], [102.0, 1.0], [101.0, 3.0], [100.0, 2.0], [107.0, 2.0], [106.0, 3.0], [105.0, 3.0], [104.0, 3.0], [111.0, 2.0], [110.0, 2.0], [109.0, 1.0], [108.0, 1.0], [115.0, 2.0], [114.0, 2.0], [113.0, 2.0], [112.0, 2.0], [119.0, 2.0], [118.0, 2.0], [117.0, 3.0], [116.0, 2.0], [123.0, 2.0], [122.0, 2.0], [121.0, 2.0], [120.0, 1.0], [127.0, 1.0], [126.0, 2.0], [125.0, 2.0], [124.0, 2.0], [135.0, 2.0], [134.0, 2.0], [133.0, 1.0], [132.0, 2.0], [131.0, 3.0], [130.0, 2.0], [129.0, 3.0], [128.0, 2.0], [143.0, 2.0], [142.0, 2.0], [141.0, 2.0], [140.0, 2.0], [139.0, 1.0], [138.0, 3.0], [137.0, 2.0], [136.0, 2.0], [151.0, 1.0], [150.0, 2.0], [149.0, 2.0], [148.0, 3.0], [147.0, 2.0], [146.0, 1.0], [145.0, 1.0], [144.0, 2.0], [159.0, 1.0], [158.0, 2.0], [157.0, 2.0], [156.0, 2.0], [155.0, 2.0], [154.0, 2.0], [153.0, 2.0], [152.0, 2.0], [167.0, 3.0], [166.0, 1.0], [165.0, 2.0], [164.0, 2.0], [163.0, 1.0], [162.0, 2.0], [161.0, 3.0], [160.0, 2.0], [175.0, 2.0], [174.0, 2.0], [173.0, 2.0], [172.0, 1.0], [171.0, 1.0], [170.0, 2.0], [169.0, 1.0], [168.0, 2.0], [183.0, 2.0], [182.0, 2.0], [181.0, 2.0], [180.0, 2.0], [179.0, 1.0], [178.0, 2.0], [177.0, 3.0], [176.0, 2.0], [191.0, 1.0], [190.0, 1.0], [189.0, 3.0], [188.0, 2.0], [187.0, 2.0], [186.0, 2.0], [185.0, 2.0], [184.0, 2.0], [199.0, 2.0], [198.0, 1.0], [197.0, 1.0], [196.0, 3.0], [195.0, 2.0], [194.0, 2.0], [193.0, 2.0], [192.0, 1.0], [204.0, 2.0], [203.0, 2.0], [202.0, 2.0], [201.0, 3.0], [200.0, 2.0], [267.0, 124.6949152542373], [261.0, 116.75], [378.0, 110.0], [377.0, 111.0], [375.0, 110.0], [373.0, 120.0], [431.0, 106.0], [429.0, 108.0], [435.0, 105.0], [433.0, 105.5], [432.0, 105.0], [458.0, 121.0], [452.0, 107.0], [478.0, 95.0], [470.0, 113.0], [465.0, 114.66666666666667], [494.0, 103.0], [488.0, 102.0], [484.0, 108.4], [480.0, 106.0], [511.0, 126.0], [510.0, 110.0], [508.0, 111.5], [507.0, 111.0], [499.0, 105.0], [529.0, 110.0], [537.0, 122.0], [535.0, 122.66666666666667], [534.0, 123.0], [531.0, 119.0], [523.0, 219.0], [520.0, 110.93333333333332], [516.0, 108.0], [515.0, 108.0], [514.0, 105.0], [571.0, 132.75], [574.0, 101.0], [570.0, 106.0], [568.0, 104.0], [565.0, 108.0], [563.0, 140.0], [560.0, 217.0], [556.0, 134.83333333333331], [554.0, 91.0], [553.0, 121.0], [552.0, 133.25], [584.0, 133.0], [583.0, 103.0], [582.0, 102.33333333333333], [578.0, 143.25], [577.0, 102.0], [576.0, 109.0], [637.0, 218.0], [639.0, 155.0], [635.0, 89.0], [633.0, 89.0], [632.0, 212.5], [616.0, 159.5], [610.0, 106.66666666666667], [613.0, 107.0], [631.0, 102.0], [630.0, 101.0], [628.0, 100.0], [626.0, 100.0], [645.0, 144.5], [668.0, 214.0], [662.0, 209.0], [660.0, 211.0], [654.0, 77.0], [651.0, 84.0], [649.0, 211.0], [644.0, 211.0], [643.0, 85.0], [642.0, 102.0], [695.0, 132.0], [688.0, 134.0], [685.0, 133.5], [683.0, 134.0], [680.0, 133.0], [679.0, 134.5], [711.0, 106.5], [731.0, 123.5], [722.0, 125.0], [721.0, 124.0], [717.0, 123.0], [715.0, 124.0], [712.0, 104.15], [710.0, 109.5], [709.0, 118.0], [705.0, 133.0], [766.0, 208.0], [763.0, 206.0], [761.0, 86.0], [757.0, 86.0], [754.0, 86.0], [752.0, 86.0], [751.0, 125.33333333333333], [739.0, 122.0], [795.0, 163.0], [783.0, 171.0], [778.0, 169.6], [775.0, 148.75], [772.0, 101.5], [770.0, 173.0], [769.0, 174.0], [768.0, 136.14634146341464], [826.0, 93.0], [823.0, 92.0], [822.0, 164.0], [821.0, 92.0], [804.0, 167.0], [860.0, 103.54545454545455], [862.0, 89.66666666666667], [858.0, 69.5], [857.0, 71.0], [856.0, 71.0], [832.0, 166.66666666666666], [854.0, 71.0], [853.0, 70.0], [849.0, 88.5], [844.0, 71.0], [843.0, 149.0], [842.0, 70.0], [840.0, 70.0], [868.0, 187.0], [894.0, 195.5], [895.0, 155.5], [879.0, 193.0], [865.0, 145.5], [864.0, 91.0], [867.0, 168.26315789473688], [866.0, 168.66666666666669], [875.0, 196.33333333333334], [874.0, 192.0], [873.0, 193.0], [872.0, 189.0], [869.0, 57.0], [902.0, 155.0], [925.0, 168.0], [927.0, 68.5], [924.0, 120.00000000000001], [916.0, 102.25], [911.0, 146.5], [908.0, 119.75], [905.0, 84.0], [899.0, 156.0], [898.0, 123.66666666666667], [896.0, 109.5], [959.0, 99.33333333333333], [958.0, 89.0], [932.0, 93.0], [930.0, 136.0], [928.0, 173.0], [990.0, 105.66666666666667], [991.0, 80.66666666666667], [989.0, 89.5], [987.0, 159.0], [986.0, 69.0], [979.0, 131.89583333333337], [978.0, 112.0], [976.0, 153.0], [975.0, 70.0], [974.0, 135.0], [973.0, 109.0], [1000.0, 52.38035448511281], [999.0, 52.0], [998.0, 100.0], [996.0, 106.40506329113926], [995.0, 123.2], [994.0, 119.83333333333334], [993.0, 155.66666666666666], [992.0, 122.0], [1.0, 1.0]], "isOverall": false, "label": "MakePDF", "isController": false}, {"data": [[999.5416050455883, 52.4288452521936]], "isOverall": false, "label": "MakePDF-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1000.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.7693997E12, "maxY": 9.88668151E7, "series": [{"data": [[1.76939982E12, 1701290.6166666667], [1.76939976E12, 9.88668151E7], [1.7693997E12, 7.165089526666667E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76939982E12, 0.0], [1.76939976E12, 0.0], [1.7693997E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76939982E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 20.462270593787064, "minX": 1.7693997E12, "maxY": 107.36120140423878, "series": [{"data": [[1.76939982E12, 107.36120140423878], [1.76939976E12, 74.65034181379407], [1.7693997E12, 20.462270593787064]], "isOverall": false, "label": "MakePDF", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76939982E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7693997E12, "maxY": 4.9E-324, "series": [{"data": [[1.76939982E12, 0.0], [1.76939976E12, 0.0], [1.7693997E12, 0.0]], "isOverall": false, "label": "MakePDF", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76939982E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7693997E12, "maxY": 4.9E-324, "series": [{"data": [[1.76939982E12, 0.0], [1.76939976E12, 0.0], [1.7693997E12, 0.0]], "isOverall": false, "label": "MakePDF", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76939982E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7693997E12, "maxY": 504.0, "series": [{"data": [[1.76939982E12, 487.0], [1.76939976E12, 449.0], [1.7693997E12, 504.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76939982E12, 1.0], [1.76939976E12, 0.0], [1.7693997E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76939982E12, 177.0], [1.76939976E12, 173.0], [1.7693997E12, 64.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76939982E12, 272.15999999999985], [1.76939976E12, 242.0], [1.7693997E12, 101.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76939982E12, 102.0], [1.76939976E12, 108.0], [1.7693997E12, 38.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76939982E12, 212.0], [1.76939976E12, 192.0], [1.7693997E12, 74.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76939982E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 5.0, "maxY": 113.0, "series": [{"data": [[5.0, 2.0], [8.0, 2.0], [9.0, 2.0], [8281.0, 24.0], [8253.0, 3.0], [8581.0, 17.0], [8553.0, 19.0], [8407.0, 21.0], [8279.0, 28.0], [8313.0, 24.0], [9199.0, 8.0], [8891.0, 11.0], [8923.0, 12.0], [8775.0, 15.0], [9495.0, 5.0], [9905.0, 3.0], [172.0, 13.0], [250.0, 113.0], [796.0, 6.0], [1537.0, 4.0], [2701.0, 2.0], [2920.0, 4.0], [6845.0, 95.0], [6847.0, 105.0], [6746.0, 106.0], [7109.0, 91.0], [7135.0, 84.0], [7103.0, 66.0], [7110.0, 92.0], [7012.0, 97.0], [7134.0, 94.0], [7060.0, 94.0], [7003.0, 103.0], [6960.0, 105.0], [7032.0, 106.0], [7027.0, 110.0], [7375.0, 61.0], [7422.0, 56.0], [7407.0, 56.0], [7409.0, 77.0], [7347.0, 54.0], [7360.0, 65.0], [7304.0, 71.0], [7327.0, 86.0], [7193.0, 76.0], [7276.0, 87.0], [7246.0, 102.0], [7198.0, 84.0], [7215.0, 98.0], [7373.0, 77.0], [7362.0, 95.0], [7384.0, 77.0], [7390.0, 84.0], [7485.0, 52.0], [7674.0, 46.0], [7630.0, 65.0], [7618.0, 69.0], [7461.0, 55.0], [7447.0, 80.0], [7549.0, 69.0], [7444.0, 75.0], [7533.0, 56.0], [7534.0, 74.0], [7524.0, 75.0], [7523.0, 79.0], [7546.0, 60.0], [7462.0, 61.0], [7464.0, 69.0], [7565.0, 63.0], [7559.0, 64.0], [7613.0, 64.0], [7737.0, 39.0], [7791.0, 6.0], [7783.0, 32.0], [7745.0, 43.0], [7757.0, 51.0], [7760.0, 47.0], [7860.0, 33.0], [7834.0, 41.0], [7828.0, 33.0], [7697.0, 37.0], [7816.0, 37.0], [7895.0, 39.0], [7809.0, 62.0], [7683.0, 42.0], [7995.0, 28.0], [8124.0, 25.0], [7949.0, 30.0], [8033.0, 31.0], [8188.0, 34.0], [8091.0, 35.0], [7984.0, 41.0], [8018.0, 42.0], [7999.0, 47.0], [8432.0, 11.0], [8266.0, 23.0], [8410.0, 26.0], [9200.0, 6.0], [9126.0, 8.0], [8786.0, 14.0], [8896.0, 14.0], [8728.0, 18.0], [9668.0, 4.0], [9856.0, 3.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9905.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 5.0, "maxY": 4.9E-324, "series": [{"data": [[5.0, 0.0], [8.0, 0.0], [9.0, 0.0], [8281.0, 0.0], [8253.0, 0.0], [8581.0, 0.0], [8553.0, 0.0], [8407.0, 0.0], [8279.0, 0.0], [8313.0, 0.0], [9199.0, 0.0], [8891.0, 0.0], [8923.0, 0.0], [8775.0, 0.0], [9495.0, 0.0], [9905.0, 0.0], [172.0, 0.0], [250.0, 0.0], [796.0, 0.0], [1537.0, 0.0], [2701.0, 0.0], [2920.0, 0.0], [6845.0, 0.0], [6847.0, 0.0], [6746.0, 0.0], [7109.0, 0.0], [7135.0, 0.0], [7103.0, 0.0], [7110.0, 0.0], [7012.0, 0.0], [7134.0, 0.0], [7060.0, 0.0], [7003.0, 0.0], [6960.0, 0.0], [7032.0, 0.0], [7027.0, 0.0], [7375.0, 0.0], [7422.0, 0.0], [7407.0, 0.0], [7409.0, 0.0], [7347.0, 0.0], [7360.0, 0.0], [7304.0, 0.0], [7327.0, 0.0], [7193.0, 0.0], [7276.0, 0.0], [7246.0, 0.0], [7198.0, 0.0], [7215.0, 0.0], [7373.0, 0.0], [7362.0, 0.0], [7384.0, 0.0], [7390.0, 0.0], [7485.0, 0.0], [7674.0, 0.0], [7630.0, 0.0], [7618.0, 0.0], [7461.0, 0.0], [7447.0, 0.0], [7549.0, 0.0], [7444.0, 0.0], [7533.0, 0.0], [7534.0, 0.0], [7524.0, 0.0], [7523.0, 0.0], [7546.0, 0.0], [7462.0, 0.0], [7464.0, 0.0], [7565.0, 0.0], [7559.0, 0.0], [7613.0, 0.0], [7737.0, 0.0], [7791.0, 0.0], [7783.0, 0.0], [7745.0, 0.0], [7757.0, 0.0], [7760.0, 0.0], [7860.0, 0.0], [7834.0, 0.0], [7828.0, 0.0], [7697.0, 0.0], [7816.0, 0.0], [7895.0, 0.0], [7809.0, 0.0], [7683.0, 0.0], [7995.0, 0.0], [8124.0, 0.0], [7949.0, 0.0], [8033.0, 0.0], [8188.0, 0.0], [8091.0, 0.0], [7984.0, 0.0], [8018.0, 0.0], [7999.0, 0.0], [8432.0, 0.0], [8266.0, 0.0], [8410.0, 0.0], [9200.0, 0.0], [9126.0, 0.0], [8786.0, 0.0], [8896.0, 0.0], [8728.0, 0.0], [9668.0, 0.0], [9856.0, 0.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 9905.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 115.05, "minX": 1.7693997E12, "maxY": 7414.366666666667, "series": [{"data": [[1.76939982E12, 115.05], [1.76939976E12, 7414.366666666667], [1.7693997E12, 5374.266666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76939982E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 128.18333333333334, "minX": 1.7693997E12, "maxY": 7406.566666666667, "series": [{"data": [[1.76939982E12, 128.18333333333334], [1.76939976E12, 7406.566666666667], [1.7693997E12, 5368.933333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76939982E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 128.18333333333334, "minX": 1.7693997E12, "maxY": 7406.566666666667, "series": [{"data": [[1.76939982E12, 128.18333333333334], [1.76939976E12, 7406.566666666667], [1.7693997E12, 5368.933333333333]], "isOverall": false, "label": "MakePDF-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76939982E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 128.18333333333334, "minX": 1.7693997E12, "maxY": 7406.566666666667, "series": [{"data": [[1.76939982E12, 128.18333333333334], [1.76939976E12, 7406.566666666667], [1.7693997E12, 5368.933333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76939982E12, "title": "Total Transactions Per Second"}},
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

