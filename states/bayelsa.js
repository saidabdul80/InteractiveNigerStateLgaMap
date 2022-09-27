//"
let bay_cont_id = "bayelsaId"
let bay_sketch = `
<h1>BAYELSA</h1>
     <span id="${bay_cont_id}_jstip" class="jstip"></span>
        <div id="${bay_cont_id}_mapwrapper">
            <div id="${bay_cont_id}_map_base">
            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="width:100%;height:98vh;shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
            viewBox="0 0 1577.15 1183.23"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
             <defs>
              <font id="${bay_cont_id}_FontID0" horiz-adv-x="722" font-variant="normal" style="fill-rule:nonzero" font-style="normal" font-weight="700">
                <font-face 
                    font-family="Arial">
                    <font-face-src>
                        <font-face-name name="Arial Bold"/>
                    </font-face-src>
                </font-face>
               <missing-glyph><path d="M0 0z"/></missing-glyph>
               <glyph unicode="/" horiz-adv-x="277" d="M-2.00448 -12.0066l177.994 739.998 103.018 0 -179.006 -739.998 -102.006 0z"/>
               <glyph unicode="B" horiz-adv-x="722" d="M72.9914 716.005l286.337 0c56.8341,0 99.0092,-2.34868 126.829,-7.00556 28.002,-4.8391 52.8454,-14.6793 74.8339,-29.5003 22.0088,-15.0032 40.3326,-34.8456 55.0119,-59.6687 14.659,-24.8434 21.9885,-52.8252 21.9885,-83.6618 0,-33.3473 -8.98979,-64.1636 -26.9896,-92.0036 -17.9998,-28.002 -42.499,-48.8364 -73.3356,-62.8273 43.4912,-12.8368 76.8384,-34.5014 100.325,-65.176 23.3451,-30.6544 35.0075,-66.654 35.0075,-108.161 0,-32.6589 -7.51174,-64.3256 -22.677,-95.1622 -15.1652,-30.8366 -35.8174,-55.4978 -62.1591,-74.0038 -26.1595,-18.344 -58.4944,-29.6623 -97.0047,-33.9952 -23.993,-2.51066 -82.1635,-4.17094 -174.329,-4.8391l-243.838 0 0 716.005zm145.011 -119.014l0 -164.995 94.656 0c56.166,0 91.1735,0.830138 104.84,2.51066 24.6612,2.81437 44.1593,11.3182 58.3324,25.4913 14.1731,14.1731 21.1584,32.6589 21.1584,55.6598 0,22.1708 -6.15517,40.0086 -18.3238,53.8375 -12.1686,13.8289 -30.3304,22.1708 -54.3437,25.0054 -14.3351,1.66028 -55.4978,2.49042 -123.326,2.49042l-82.9936 0zm0 -283.988l0 -192.005 133.996 0c51.995,0 85.1601,1.4983 99.1712,4.33292 21.5026,4.00896 38.9963,13.5049 52.5012,28.6701 13.4847,15.3272 20.3283,35.4935 20.3283,61.0051 0,21.6646 -5.16306,39.8264 -15.6714,54.8296 -10.3261,15.0032 -25.4913,25.9975 -45.1717,32.8208 -19.6601,6.84358 -62.4831,10.3464 -128.327,10.3464l-116.827 0z"/>
               <glyph unicode="E" horiz-adv-x="666" d="M72.9914 0l0 716.005 530.013 0 0 -121.018 -385.002 0 0 -158.982 357.992 0 0 -120.998 -357.992 0 0 -194.009 398.993 0 0 -120.998 -544.004 0z"/>
               <glyph unicode="I" horiz-adv-x="277" d="M67.9904 0l0 716.005 145.011 0 0 -716.005 -145.011 0z"/>
               <glyph unicode="K" horiz-adv-x="722" d="M74.9959 0l0 716.005 145.011 0 0 -317.174 292.148 317.174 194.333 0 -270.159 -278.846 284.171 -437.159 -187.004 0 -197.006 336.166 -116.483 -119.661 0 -216.504 -145.011 0z"/>
               <glyph unicode="N" horiz-adv-x="722" d="M72.9914 0l0 716.005 140.334 0 294.679 -479.84 0 479.84 133.996 0 0 -716.005 -144.829 0 -290.164 470.668 0 -470.668 -134.017 0z"/>
               <glyph unicode="O" horiz-adv-x="777" d="M43.0052 353.659c0,73.0117 10.9943,134.341 32.8208,184.007 16.1776,36.5058 38.5103,69.3267 66.6743,98.3208 28.164,29.0144 59.0006,50.517 92.4896,64.6698 44.6655,18.83 96.1746,28.3462 154.507,28.3462 105.671,0 190,-32.8411 253.496,-98.341 63.3335,-65.6619 95.0002,-156.835 95.0002,-273.662 0,-115.835 -31.5048,-206.502 -94.3321,-271.84 -62.8273,-65.5 -146.995,-98.1588 -252.16,-98.1588 -106.501,0 -191.337,32.4969 -254.164,97.6729 -62.8476,64.9938 -94.3321,154.649 -94.3321,268.985zm149 4.8391c0,-81.1713 18.83,-142.662 56.3279,-184.675 37.498,-41.8309 85.1601,-62.8273 142.824,-62.8273 57.8465,0 105.164,20.8345 142.338,62.3414 36.9918,41.6689 55.4978,103.99 55.4978,187.166 0,82.1635 -17.9998,143.492 -54.1615,183.825 -35.9997,40.4946 -83.844,60.6609 -143.675,60.6609 -59.6687,0 -107.817,-20.4902 -144.323,-61.329 -36.5058,-41.0007 -54.8296,-102.654 -54.8296,-185.161z"/>
               <glyph unicode="S" horiz-adv-x="666" d="M35.0075 231.993l140.982 14.0111c8.50386,-47.1762 25.5116,-81.6775 51.3471,-103.848 25.8355,-22.1505 60.6609,-33.165 104.496,-33.165 46.3258,0 81.3333,9.84018 104.84,29.5003 23.4868,19.6804 35.3315,42.6813 35.3315,69.0027 0,17.0077 -5.00108,31.3428 -14.8413,43.3292 -9.84018,11.8447 -27.1718,22.1708 -51.833,30.8366 -16.8255,6.01344 -55.1738,16.3396 -115.167,31.3428 -77.1624,19.3362 -131.324,42.985 -162.505,71.1692 -43.8354,39.4822 -65.6619,87.6505 -65.6619,144.485 0,36.5058 10.3261,70.8452 30.8366,102.674 20.6725,31.8287 50.3347,56.004 89.169,72.6675 38.8343,16.6635 85.5043,25.0054 140.496,25.0054 89.493,0 156.997,-19.8423 202.169,-59.6687 45.3337,-39.8466 69.0027,-92.8338 71.3312,-159.346l-145.011 -5.00108c-6.15517,37.012 -19.3159,63.5157 -39.4822,79.673 -20.1663,16.1776 -50.517,24.3372 -90.8495,24.3372 -41.6487,0 -74.3278,-8.66584 -97.8146,-25.9975 -15.1855,-11.1765 -22.8389,-25.9975 -22.8389,-44.6655 0,-17.0077 7.16754,-31.5048 21.5026,-43.5114 18.1618,-15.4892 62.3211,-31.4845 132.498,-48.1683 70.1568,-16.4813 121.99,-33.8332 155.499,-51.4888 33.651,-17.8379 59.9927,-41.9929 78.9846,-72.8295 19.0122,-30.8366 28.5082,-68.8408 28.5082,-114.012 0,-41.0007 -11.3385,-79.4908 -34.1572,-115.329 -22.8389,-35.8377 -55.0119,-62.5034 -96.6808,-79.835 -41.6689,-17.4936 -93.6639,-26.1595 -155.823,-26.1595 -90.5053,0 -159.994,20.8345 -208.506,62.6653 -48.4922,41.6689 -77.3244,102.492 -86.8203,182.327z"/>
               <glyph unicode="Y" horiz-adv-x="666" d="M261.008 0l0 301.34 -262.506 414.664 169.49 0 169.348 -283.502 164.833 283.502 166.331 0 -262.506 -415.677 0 -300.328 -144.991 0z"/>
               <glyph unicode="a" horiz-adv-x="556" d="M174.005 359.005l-124.015 21.9885c14.0111,50.6789 38.1661,88.1769 72.3435,112.494 34.1572,24.3372 84.9981,36.5058 152.341,36.5058 61.1468,0 106.825,-7.16754 136.831,-21.6646 29.8242,-14.4971 50.9827,-32.8411 63.1513,-55.1738 12.1686,-22.3327 18.344,-63.1513 18.344,-122.82l-2.00448 -159.994c0,-45.5159 2.16646,-79.1669 6.49938,-100.831 4.33292,-21.6848 12.4926,-44.8477 24.4992,-69.5089l-136.001 0c-3.50278,9.01004 -7.99768,22.3327 -13.1607,40.0086 -2.16646,8.15965 -3.82674,13.4847 -4.8391,15.9954 -23.3249,-23.0009 -48.3303,-40.1706 -74.9959,-51.6711 -26.6657,-11.5005 -54.9916,-17.3317 -85.1601,-17.3317 -53.1694,0 -95.1825,14.4971 -125.837,43.4912 -30.6746,28.8321 -46.0018,65.5 -46.0018,109.841 0,29.1561 7.00556,55.3358 20.9964,78.3367 14.0111,22.8187 33.5092,40.4946 58.8386,52.6632 25.1674,12.1686 61.491,22.8389 108.991,31.9907 64.0017,12.0066 108.505,23.3451 133.166,33.6712l0 13.8289c0,26.6657 -6.49938,45.6779 -19.4981,57.1783 -13.1607,11.3182 -37.8219,16.9875 -74.0038,16.9875 -24.4992,0 -43.4912,-4.81885 -57.1581,-14.659 -13.8289,-9.65795 -24.8434,-26.8276 -33.327,-51.3269zm183.987 -111.016c-17.4936,-5.83122 -45.3337,-12.8165 -83.4998,-20.9964 -38.0041,-8.15965 -62.9893,-16.1573 -74.6517,-23.831 -17.8379,-12.8368 -26.8479,-28.8321 -26.8479,-48.3303 0,-19.3362 7.16754,-35.8377 21.5026,-49.8286 14.3351,-14.0111 32.4969,-20.9964 54.6677,-20.9964 24.6612,0 48.3303,8.15965 70.825,24.317 16.5015,12.5128 27.5161,27.5161 32.6791,45.5159 3.50278,11.6624 5.32503,33.9952 5.32503,66.8363l0 27.3136z"/>
               <glyph unicode="b" horiz-adv-x="610" d="M66.0061 0l0 716.005 136.993 0 0 -258.335c42.3371,48.1683 92.3276,72.3233 150.336,72.3233 63.1715,0 115.329,-22.8389 156.653,-68.6585 41.3449,-45.8398 62.0174,-111.664 62.0174,-197.512 0,-88.6628 -21.0167,-156.997 -63.1715,-204.983 -42.1751,-47.8443 -93.5019,-71.8373 -153.677,-71.8373 -29.6623,0 -58.8183,7.67372 -87.6505,22.8389 -28.8321,15.3272 -53.6755,37.336 -74.51,66.3301l0 -76.1703 -126.991 0zm134.989 269.491c0,-53.8173 8.50386,-93.8259 25.5116,-119.499 23.831,-36.6678 55.3156,-54.9916 94.818,-54.9916 30.3304,0 56.166,12.9988 77.6686,38.9963 21.3406,25.9975 32.0109,66.9982 32.0109,122.84 0,59.4865 -10.8323,102.33 -32.3349,128.651 -21.5026,26.3417 -48.9984,39.5024 -82.6696,39.5024 -33.0031,0 -60.3369,-12.8368 -82.1635,-38.4901 -21.8468,-25.6736 -32.8411,-64.6698 -32.8411,-117.009z"/>
               <glyph unicode="e" horiz-adv-x="556" d="M372.003 164.003l136.993 -23.0009c-17.4936,-50.1728 -45.3337,-88.3389 -83.1758,-114.66 -37.9839,-26.1797 -85.484,-39.3405 -142.318,-39.3405 -90.1611,0 -156.997,29.5003 -200.165,88.5009 -34.1774,47.3381 -51.3471,106.987 -51.3471,179.168 0,85.9902 22.515,153.495 67.3425,202.169 44.8275,48.8162 101.662,73.1534 170.34,73.1534 77.0004,0 137.823,-25.4913 182.489,-76.4942 44.5035,-51.0029 65.8442,-129.178 63.8397,-234.504l-343.009 0c1.01236,-40.6565 12.0066,-72.3233 33.165,-95.0002 21.0167,-22.6567 47.3381,-33.9952 78.6809,-33.9952 21.4824,0 39.4822,5.83122 53.9995,17.4936 14.659,11.6827 25.6533,30.5127 33.165,56.5102zm7.99768 138.998c-1.01236,39.8264 -11.1765,70.1568 -30.6746,90.8293 -19.4981,20.8345 -43.1672,31.1606 -71.1692,31.1606 -29.8242,0 -54.4854,-10.9943 -73.9836,-32.8208 -19.4981,-21.8468 -29.0144,-51.6711 -28.6701,-89.169l204.498 0z"/>
               <glyph unicode="g" horiz-adv-x="610" d="M59.0006 -33.0031l156.997 -18.9919c2.67264,-18.506 8.66584,-31.1808 17.9998,-38.1661 13.1607,-9.84018 33.6712,-14.8413 61.6732,-14.8413 35.8174,0 62.6653,5.34528 80.6652,16.1776 11.9864,7.16754 21.1584,18.668 27.3338,34.6633 4.15069,11.3385 6.31715,32.4969 6.31715,62.9893l0.66816 75.8463c-41.3247,-56.5102 -93.3197,-84.6741 -155.985,-84.6741 -69.6709,0 -125.007,29.5003 -165.663,88.3389 -32.0109,46.4878 -48.0063,104.496 -48.0063,173.661 0,87.0026 20.9964,153.333 62.8273,199.172 41.8309,45.8196 94.0081,68.8205 156.329,68.8205 64.1636,0 117.171,-28.164 158.84,-84.4919l0 73.4976 128.003 0 0 -465.323c0,-61.167 -5.00108,-107.007 -15.1652,-137.175 -10.0022,-30.3304 -24.1753,-53.9995 -42.499,-71.3312 -18.1821,-17.1697 -42.499,-30.8366 -73.0117,-40.4946 -30.4924,-9.84018 -69.0027,-14.6793 -115.49,-14.6793 -87.9947,0 -150.336,15.1652 -187.166,45.3337 -36.8298,30.3304 -55.1738,68.4965 -55.1738,115.005 0,4.4949 0.161978,10.1641 0.506182,16.6635zm123.002 303.001c0,-54.9916 10.6703,-95.1622 31.8287,-120.674 21.3406,-25.4913 47.6621,-38.3281 78.8429,-38.3281 33.327,0 61.653,13.1607 84.6539,39.3405 23.1629,26.1595 34.6633,64.8318 34.6633,116.159 0,53.6755 -10.9943,93.5019 -33.165,119.499 -21.9885,25.9975 -49.9905,38.9963 -83.8237,38.9963 -32.8411,0 -59.8307,-12.8368 -81.1713,-38.3281 -21.1584,-25.4913 -31.8287,-64.3256 -31.8287,-116.665z"/>
               <glyph unicode="h" horiz-adv-x="610" d="M207.008 716.005l0 -265.341c44.4833,52.8252 97.8146,79.3288 159.65,79.3288 31.849,0 60.4989,-5.83122 86.0104,-17.4936 25.4913,-11.8447 44.6655,-26.6657 57.6643,-45.0097 12.9988,-18.1618 21.8266,-38.3281 26.5037,-60.4989 4.81885,-22.1505 7.16754,-56.4899 7.16754,-102.998l0 -303.993 -137.013 0 0 273.662c0,54.3437 -2.65239,88.8451 -7.8357,103.504 -5.32503,14.659 -14.659,26.3215 -27.9817,34.8253 -13.343,8.66584 -30.0065,12.9988 -50.1728,12.9988 -23.0009,0 -43.5114,-5.48701 -61.6732,-16.6635 -18.1618,-10.9943 -31.3225,-27.6578 -39.6644,-49.9905 -8.50386,-22.1708 -12.6545,-55.1738 -12.6545,-98.665l0 -259.671 -137.013 0 0 716.005 137.013 0z"/>
               <glyph unicode="i" horiz-adv-x="277" d="M71.9993 588.993l0 127.011 136.993 0 0 -127.011 -136.993 0zm0 -588.993l0 518.999 136.993 0 0 -518.999 -136.993 0z"/>
               <glyph unicode="j" horiz-adv-x="277" d="M69.0027 588.993l0 127.011 136.993 0 0 -127.011 -136.993 0zm136.993 -69.9948l0 -502.497c0,-66.0061 -4.33292,-112.676 -12.9988,-139.828 -8.50386,-27.1718 -25.1674,-48.5125 -49.8286,-63.6777 -24.4992,-15.3272 -55.842,-23.0009 -94.0081,-23.0009 -13.6669,0 -28.3259,1.17434 -44.1593,3.66476 -15.8334,2.34868 -32.8411,6.01344 -51.0029,11.0145l23.5071 116.665c6.49938,-1.17434 12.6545,-2.34868 18.4858,-3.17882 5.66924,-0.830138 11.0145,-1.15409 16.0156,-1.15409 13.9909,0 25.6533,2.9966 34.6633,8.98979 8.98979,6.01344 15.0032,13.343 17.8379,21.8468 2.9966,8.48361 4.4949,33.8332 4.4949,76.15l0 495.005 136.993 0z"/>
               <glyph unicode="k" horiz-adv-x="556" d="M66.9982 0l0 716.005 136.993 0 0 -379.839 160.5 182.833 169.004 0 -177.002 -189.677 190 -329.322 -147.987 0 -131 234.16 -63.5157 -67.9904 0 -166.169 -136.993 0z"/>
               <glyph unicode="l" horiz-adv-x="277" d="M71.9993 0l0 716.005 136.993 0 0 -716.005 -136.993 0z"/>
               <glyph unicode="m" horiz-adv-x="889" d="M61.9972 518.999l125.999 0 0 -70.825c45.1717,54.4854 99.0092,81.8193 161.492,81.8193 33.1853,0 62.0174,-6.82333 86.3344,-20.4902 24.4992,-13.6669 44.5035,-34.3394 60.0129,-61.9972 22.8187,27.6578 47.5001,48.3303 73.8216,61.9972 26.3417,13.6669 54.5057,20.4902 84.5121,20.4902 37.9839,0 70.1568,-7.65347 96.6605,-23.1629 26.3215,-15.5094 46.0018,-38.1661 59.0006,-68.1726 9.49597,-21.9885 14.1731,-57.8262 14.1731,-107.331l0 -331.326 -137.013 0 0 296.157c0,51.5091 -4.65687,84.6741 -14.1528,99.5154 -12.6748,19.4981 -32.3349,29.3181 -58.6766,29.3181 -19.1742,0 -37.336,-5.83122 -54.3235,-17.4936 -16.8457,-11.8244 -29.1763,-28.9941 -36.6678,-51.5091 -7.51174,-22.6567 -11.1765,-58.3324 -11.1765,-107.149l0 -248.839 -136.993 0 0 283.988c0,50.3347 -2.51066,83.0138 -7.32952,97.5109 -4.8391,14.659 -12.3306,25.6736 -22.677,32.8411 -10.1641,7.14729 -24.155,10.6501 -41.6689,10.6501 -21.1584,0 -40.1504,-5.66924 -56.9961,-16.9875 -16.9875,-11.5005 -28.9941,-27.84 -36.3236,-49.3426 -7.32952,-21.5026 -11.0145,-57.1581 -11.0145,-106.825l0 -251.836 -136.993 0 0 518.999z"/>
               <glyph unicode="n" horiz-adv-x="610" d="M544.004 0l-137.013 0 0 264.49c0,56.004 -2.9966,92.1656 -8.82781,108.505 -5.99319,16.5015 -15.4892,29.1763 -28.8321,38.3281 -13.343,9.17202 -29.3383,13.6669 -48.0063,13.6669 -23.993,0 -45.4956,-6.49938 -64.4876,-19.4981 -19.1742,-12.9988 -32.1729,-30.3304 -39.1785,-51.6711 -7.16754,-21.4824 -10.6501,-61.1468 -10.6501,-119.155l0 -234.666 -137.013 0 0 518.999 127.011 0 0 -76.1703c45.4956,58.1704 102.654,87.1645 171.818,87.1645 30.3304,0 58.1704,-5.48701 83.3378,-16.3396 25.3293,-10.9943 44.3415,-24.8232 57.1581,-41.6487 13.019,-17.0077 22.0088,-36.1819 27.0099,-57.6643 5.16306,-21.5026 7.67372,-52.1772 7.67372,-92.1859l0 -322.154z"/>
               <glyph unicode="o" horiz-adv-x="610" d="M40.0086 265.827c0,45.6779 11.1563,89.8372 33.651,132.498 22.515,42.8432 54.3437,75.3401 95.5064,97.8349 41.1627,22.4947 87.0026,33.8332 137.823,33.8332 78.4987,0 142.683,-25.4913 192.835,-76.4942 50.1728,-51.1649 75.1781,-115.511 75.1781,-193.503 0,-78.6607 -25.3496,-143.837 -75.8463,-195.487 -50.6587,-51.6711 -114.316,-77.5066 -191.155,-77.5066 -47.5001,0 -92.8338,10.8323 -136.001,32.3349 -43.0052,21.5026 -75.8261,52.9871 -98.341,94.656 -22.4947,41.5069 -33.651,92.1656 -33.651,151.834zm140.982 -7.32952c0,-51.4888 12.1686,-90.9913 36.5058,-118.325 24.4992,-27.5161 54.5057,-41.1627 90.3434,-41.1627 35.6555,0 65.6619,13.6467 89.8169,41.1627 24.1753,27.3338 36.3439,67.1602 36.3439,119.317 0,50.8409 -12.1686,89.9992 -36.3439,117.333 -24.155,27.5161 -54.1615,41.183 -89.8169,41.183 -35.8377,0 -65.8442,-13.6669 -90.3434,-41.183 -24.3372,-27.3338 -36.5058,-66.816 -36.5058,-118.325z"/>
               <glyph unicode="p" horiz-adv-x="610" d="M67.9904 518.999l128.003 0 0 -76.1703c16.6635,25.9975 38.9963,46.9939 67.3425,63.1715 28.3259,15.9954 59.8307,23.993 94.3321,23.993 60.1547,0 111.32,-23.6691 153.333,-70.987 41.9929,-47.1762 62.9893,-113.182 62.9893,-197.512 0,-86.8203 -21.1584,-154.163 -63.4955,-202.331 -42.3371,-48.1683 -93.6639,-72.1613 -154.001,-72.1613 -28.6701,0 -54.6677,5.66924 -77.9925,17.1697 -23.1629,11.3385 -47.8443,30.8366 -73.4976,58.4944l0 -259.671 -137.013 0 0 716.005zm135.009 -251.491c0,-58.5146 11.5005,-101.682 34.6633,-129.684 23.0009,-27.8198 51.1649,-41.8309 84.1679,-41.8309 31.8287,0 58.3324,12.8368 79.4908,38.5103 21.1787,25.6533 31.6667,67.6664 31.6667,126.161 0,54.6677 -10.8323,95.1622 -32.6589,121.666 -21.6646,26.5037 -48.6745,39.6644 -80.8271,39.6644 -33.5092,0 -61.329,-12.9988 -83.3378,-38.9963 -22.1708,-25.9975 -33.165,-64.5078 -33.165,-115.49z"/>
               <glyph unicode="r" horiz-adv-x="389" d="M202.999 0l-136.993 0 0 518.999 126.991 0 0 -73.6596c21.8266,34.8253 41.5069,57.6643 59.0006,68.4965 17.4936,10.8323 37.336,16.1573 59.5068,16.1573 31.3225,0 61.491,-8.66584 90.4851,-25.8355l-42.499 -119.661c-23.1629,15.0032 -44.6655,22.4947 -64.4876,22.4947 -19.3362,0 -35.6757,-5.32503 -48.9984,-15.8334 -13.343,-10.6501 -23.831,-29.6623 -31.5048,-57.32 -7.67372,-27.678 -11.5005,-85.6662 -11.5005,-173.843l0 -159.994z"/>
               <glyph unicode="s" horiz-adv-x="556" d="M23.0009 146.003l138.005 20.9964c5.83122,-26.5037 17.6556,-46.67 35.6555,-60.3369 17.8379,-13.8289 43.0052,-20.6725 75.1781,-20.6725 35.4935,0 62.1591,6.49938 80.159,19.5184 12.0066,9.15177 17.9998,21.4824 17.9998,36.8298 0,10.3261 -3.3408,18.9919 -9.84018,25.8355 -6.82333,6.49938 -22.1708,12.6545 -45.8196,18.1618 -110.834,24.4992 -181.011,46.832 -210.673,66.9982 -41.1627,28.164 -61.6732,67.1602 -61.6732,116.989 0,45.1717 17.8379,83.0138 53.3313,113.668 35.5137,30.6746 90.5053,46.0018 165.015,46.0018 70.987,0 123.832,-11.6624 158.334,-34.8253 34.4811,-23.3451 58.3324,-57.6643 71.3312,-103.18l-129.016 -23.993c-5.48701,20.3283 -16.1573,35.9997 -31.6667,46.832 -15.4892,10.8323 -37.6599,16.1776 -66.4921,16.1776 -36.3236,0 -62.3414,-5.00108 -78.1545,-15.1652 -10.5083,-7.16754 -15.6714,-16.5015 -15.6714,-27.84 0,-9.84018 4.4949,-18.1618 13.6669,-25.0054 12.4926,-9.17202 55.3358,-21.9885 128.651,-38.6723 73.3356,-16.6635 124.501,-36.9918 153.515,-61.1468 28.8321,-24.3372 43.1672,-58.5146 43.1672,-102.168 0,-47.5001 -19.8423,-88.5009 -59.6687,-122.678 -39.6644,-34.1572 -98.503,-51.3269 -176.496,-51.3269 -70.6833,0 -126.667,14.3351 -168.012,42.823 -41.1627,28.5082 -68.1523,67.1805 -80.8271,116.179z"/>
               <glyph unicode="t" horiz-adv-x="333" d="M308.994 518.999l0 -109.011 -93.9879 0 0 -210.147c0,-42.6813 0.830138,-67.5044 2.65239,-74.51 1.8425,-7.00556 5.83122,-12.8368 12.3306,-17.4936 6.3374,-4.4949 14.0111,-6.84358 23.1831,-6.84358 12.8165,0 31.1606,4.33292 55.3358,13.181l11.4802 -106.683c-31.8287,-13.6669 -67.8284,-20.4902 -108.161,-20.4902 -24.6612,0 -46.832,4.17094 -66.654,12.4926 -19.8423,8.34188 -34.3394,19.1742 -43.5114,32.3349 -9.334,13.343 -15.6714,31.1808 -19.3362,53.8375 -2.83462,15.9954 -4.33292,48.3303 -4.33292,97.1667l0 227.154 -62.9893 0 0 109.011 62.9893 0 0 102.998 137.013 80.9891 0 -183.987 93.9879 0z"/>
               <glyph unicode="u" horiz-adv-x="610" d="M414.988 0l0 77.6686c-18.9919,-27.678 -43.8151,-49.6666 -74.6517,-66.1681 -30.8366,-16.3396 -63.3335,-24.4992 -97.5109,-24.4992 -34.9873,0 -66.3301,7.67372 -93.9879,23.0009 -27.84,15.3272 -47.8443,36.9918 -60.1749,64.6698 -12.4926,27.8198 -18.668,66.1681 -18.668,115.167l0 329.16 137.013 0 0 -238.999c0,-73.1737 2.49042,-117.839 7.65347,-134.341 5.00108,-16.5015 14.1731,-29.6623 27.678,-39.1582 13.3227,-9.65795 30.3304,-14.4971 50.9827,-14.4971 23.5071,0 44.5035,6.49938 63.1715,19.3362 18.668,12.8165 31.3428,28.8321 38.1661,47.9861 6.84358,19.1742 10.3464,65.8442 10.3464,140.334l0 219.339 136.993 0 0 -518.999 -127.011 0z"/>
               <glyph unicode="w" horiz-adv-x="777" d="M167.992 0l-163.983 518.999 133.328 0 97.1667 -340.175 89.493 340.175 132.336 0 86.1724 -340.175 99.1509 340.175 135.333 0 -166.655 -518.999 -131.668 0 -89.169 333.837 -87.9947 -333.837 -133.511 0z"/>
              </font>
              <style type="text/css">
               <![CDATA[
                @font-face { font-family:"Arial";font-variant:normal;font-style:normal;font-weight:bold;src:url("#FontID0") format(svg)}
                .fil1bay {fill:#E6E7E8}
                .fil0bay {fill:#96989A}
                .fil2bay {fill:#373435}
                .fil3bay {fill:#373435;fill-rule:nonzero}
                .fnt0bay {font-weight:bold;font-size:42.33px;font-family:'Arial'}
               ]]>
              </style>
             </defs>
             <g id="${bay_cont_id}_Layer1">
              <metadata id="${bay_cont_id}_CorelCorpID_0Corel-Layer"/>
              <g id="${bay_cont_id}_2586960654640">
               <path class="fil0bay" d="M0 273.62l0 1.79 46.53 92.73c7.75,16 14.79,30.64 22.93,46.63 8.74,17.17 6.37,20.53 6.2,45.68 -0.07,10.17 2.72,12.58 9.72,24.67 2.35,4.05 4.49,7.05 6.38,11.25 3.32,7.37 -1.36,27.07 0.62,32.96l26.15 43.26c8.59,15.55 29.51,48.76 39.53,65.21 8.38,13.76 6.94,7.86 5.89,26.01l18.92 14.32c3.58,2.17 7.55,1.25 12.53,4.17 4.63,2.72 5.71,5.06 7.12,10.58 -5.08,-1.37 -33.48,-16.95 -37.56,-17.48 4.33,10.96 30.58,53.05 37.43,63.36 15.23,22.94 33.71,49.19 51.02,70.46 15.64,19.21 29.51,35.83 46.88,54.37 2.19,2.33 1.81,2.9 4.25,5.44l35.06 36.25c10.99,10.97 35.09,35.14 46.52,44.18 2.57,2.03 3.38,3.19 5.42,5.13l37.06 33.37c2.82,2.75 3.3,2.4 5.97,4.59l32.79 27.69c-1.1,1.73 -1.46,1.6 -2.13,3.28 6.55,4.14 12.09,8.08 19.42,12.32 4.45,2.57 5.66,2.91 9.57,6.26 8.19,7 3.32,3.99 10.93,5.7 2.11,0.47 8.47,4.06 10.58,5.32 6.54,3.9 4.98,1.59 10.18,3.85 16.85,7.36 96.14,45.08 106.8,54.95 -1.18,13.07 -1.88,13.3 -1.4,26.75 10.89,0.77 78.53,20.89 94.3,24.33 3.96,0.86 12.94,1.91 14.78,5.25 1.38,2.5 4.8,11.81 5.16,14.98l2.31 0c5.03,-3.1 64.27,-4.15 75.1,-5.47 10.26,-1.25 71.23,-2.78 75.97,-5.55 2.83,-1.67 1.31,-1.61 3.52,-8.32 1.21,-3.66 1.94,-5.67 2.72,-9.59 14.09,0 33.89,7.29 51,5.99 36.89,-2.79 72.83,-7.19 109.11,-9.75l54.76 -5.23c-3.35,-3.95 -19.44,-12.2 -7.89,-20.02 10.13,-6.86 31.26,8.64 37.25,11.78 2.64,1.38 4.69,-0.49 8.56,-2.03 13.67,-5.46 24.39,-7.95 40.09,-9.97 16.87,-2.17 33.29,-0.45 50.46,-0.45l-5.07 -35.86c-8.8,-2.21 -18.61,-5.17 -27.98,-7.23 -4.11,-19.31 -7.94,-46.64 -9.24,-67.37 -0.46,-7.31 4,-13.46 6.66,-18.77 3.07,-6.14 32.89,-64.14 34.15,-69.23 -11.86,-18.31 -7.56,-13.78 4.5,-27.76 3.77,-4.36 20.25,-20.59 21.29,-23.3 -2.56,-0.99 -27,5.69 -33.95,-20.4 2.85,-2.8 5.85,-5.74 9.64,-7.38 -1.18,-2.7 -7.77,-7.4 -9.81,-9.12 -9.85,-8.33 -21.19,-18.9 -26.71,-31.4 -5.64,-12.75 -3.54,-19.1 2.47,-30 14.95,-27.1 50.76,-59.77 74.81,-80.13l10.65 -8.7c3.5,-3.02 6.26,-6.25 10.17,-9.19l0 -0.86c-13.18,-7.14 -18.71,-13.67 -37.87,-17.66 -34.28,-7.14 -57.97,8.51 -80.27,27.16 -22.58,18.89 -12.76,22.66 -34.18,21.68 -3.53,-7.45 -18.3,-13.35 -19.79,-18l-0.96 -48.3c-4.81,0.2 -15.16,8.18 -22.17,10.02l-10.69 -26.99c-14.04,-37.33 -24.54,-66.62 -3.55,-104.56l7.51 -11.89c2.74,-3.83 5.86,-6.65 8.76,-10.6 8.01,-10.93 18.49,-24.66 18.18,-39.22 -0.1,-4.38 -2.08,-12.53 -4.22,-15.36l-11.41 -7.78c2.22,-2.62 2.57,-1.38 4.27,-4.42l-22.81 -19.54c1.81,-6.33 24.33,-53.4 28.8,-61.97 5.12,-9.8 9.21,-20.23 14.8,-30.13 7.08,-12.56 16.22,-32.94 23.14,-44.62l16.05 -29.71c3.18,-6.5 4.28,-8.53 11.44,-11.45 10.48,-4.27 19.89,-10.08 30.39,-14.49 6.11,-2.56 29.37,-10.79 32.62,-13.2 -0.97,-6.17 -8.41,-25.9 -7.75,-29.74 0.69,-3.93 11.16,-18.84 12.23,-25.98 -5.23,-3.82 -13.83,-13.53 -18.98,-18.68 -3.26,-3.26 -17.54,-15.23 -13.9,-21.77 3.28,-5.88 31.6,-34.28 37.88,-38.68 0.51,-6.07 -0.19,-12.34 0.25,-18.3 1.34,-18.23 2.91,-34.97 2.91,-53.74l-17.19 0 -81.38 4.53c15.3,12.55 24.84,24.51 18.24,50.86 -1.68,6.73 -5.17,6.13 -11.04,7.52 -5.91,1.4 -11.66,2.15 -18,1.46 -10.66,-1.15 -21.49,-4.21 -31,-7.13 -2.92,4.05 -5.52,6.09 -8.58,9.8 -1.94,2.36 -2.43,2.61 -4.26,4.56 -1.97,2.07 -2.41,3.81 -4.05,5.61 -9.53,10.5 -49.39,-2.75 -60.25,-6.17 -17.07,-5.39 -14.82,-3.93 -31,-7.13 -7.07,20 -47.02,12.36 -59.83,45.41 -5.08,13.13 -1.47,13.94 3.28,31.68 1.03,3.86 4.2,13.31 4.27,16.27 -36.41,14.48 -71.19,-28.37 -98.68,3.53 -3.85,4.46 -1.86,17.26 -1.86,24.08 0,16.86 0.13,33.76 -0.02,50.61 -23.6,4.9 -35.11,-10.03 -48.97,15.3 -12.59,23.01 -16.43,18.92 -25.51,12.54 -17,-11.95 -31.55,-29.74 -54.72,-14.41 -19.28,12.75 -9.02,29.68 -15.08,50.05 -35.42,3.69 -16.52,7.95 -44.12,0.92 -19.88,-5.06 -14.44,-4.49 -29.69,-24.15 -4.08,-5.27 -7.45,-9.25 -11.16,-15.23 -9.71,-15.66 -21.42,-36.12 -49.39,-31.62 -1.54,7.09 -4.12,14.31 -6.11,21.19 -2.36,8.17 -1.08,4.07 -9.97,10.29 -2.26,1.58 -2.44,1.35 -3.48,3.74l0 26.45 -23.63 6.92c-3.23,-15.96 -13.44,-20.18 -19.26,4.62 -1.04,4.47 -1.88,7.43 -2.83,12.14 -0.83,4.16 -1.51,9.43 -2.54,12.78l-8.78 -6.43c-5.05,2.23 -8.45,8.22 -13.49,9.53 -2.06,-3.56 -3.83,-8.57 -6.77,-11.87 -13.57,0.25 -12.69,6.24 -26.77,0.89 -4.59,-1.74 -21.97,-8.73 -25.17,-8.94l-14.09 32.29c-4.79,-3.06 -15.68,-15.99 -27.29,3.47 -9.04,-1.36 -18.85,-7.47 -27.51,0.75 -9.47,8.99 1.61,36.46 -36.82,30.19 -25.16,-4.11 -7.54,-2.93 -32.85,-2.27l0.84 17.79c-19.24,0.02 -30.93,-7.32 -39.11,-17.53 -4.85,-6.05 -6.74,-10.19 -13.98,-14.22 -4.7,-2.62 -16.21,-5.3 -23.78,-5.32 -1.26,-5.14 -0.96,-6.26 -1.25,-11.87 -11.8,0.13 -28.01,8.32 -52.13,-4.23 -10.86,-5.65 -22.42,-16.43 -28.62,-26.81 -3.52,-5.89 -2.38,-4.8 -23.01,-5.31 -5.66,-0.14 -12.7,-0.56 -19.27,-0.86l2.81 -29.57c-4.21,-1.19 -7.48,-4.23 -11.75,-6.42l-25.83 -12c-5.86,-2.9 -5.92,-4.07 -14.12,-5.09 -10.67,-1.33 -22.95,2.76 -30.55,6.42 -10.57,5.1 -16.96,10.67 -23.67,14.01z"/>
               <path id="${bay_cont_id}_ngjs1" data-name="Southern Ijaw" class="fil1bay" d="M725.69 356.55c0.51,4.31 23.42,41.71 27.57,48.84 7.85,13.51 5.64,29.6 5.64,45.37 0,21.15 -8.52,47.45 -14.56,66.47 -1.83,5.76 10.21,29.72 2.79,65.04 -1.67,7.96 -3.37,13.82 -5.87,20.65l-94.34 8.74c0.57,-2.43 1.53,-32.56 3.56,-44.82 1.92,-11.54 7.48,-27.35 14.74,-33.04 -2.28,-2.84 -6.5,-8.29 -9.22,-10.57 -18.7,9.48 -39.86,17.14 -58.76,26.35 -19.73,9.61 -40.07,17.91 -59.54,26.81l-96.52 43.6c-4.99,1.72 -16.61,-7.28 -22.09,-8.65 -4.23,4.35 -8.24,8.73 -12.7,13.36 -5.46,5.66 -8.53,2.77 -18.98,-0.46 -14.07,-4.35 -27.75,-8.24 -42.27,-12.22l-5.6 30.35c-13.76,0.4 -14.36,-6.05 -27.59,0.61l-23.97 11.14 4.25 38.74c-4.17,-0.6 -6.4,-1.79 -10.63,-3.39 -3.97,-1.51 -7.66,-3.63 -11.14,-1.8 -5.21,2.74 -11.22,9.59 -18.05,11.64 -2.04,-3.91 -7.58,-12.91 -11.31,-14.59 -4.19,15.36 -8.18,12.01 -23.3,14.45 -6.43,1.03 -4.78,1.09 -7.68,5.58 -4.19,-2.19 -25.06,-12.78 -28.21,-13.11l60.41 91.67 28.12 35.28c1.36,1.59 1.65,1.67 2.81,3.38 6.56,9.61 18.43,22.6 27.01,31.08 3.37,3.34 9.25,9.38 12.02,13.5 3.79,5.63 19.16,20.37 24.95,26.14 7.13,7.1 37.69,39.12 45.55,44.25 3.27,2.13 4.33,3.57 6.97,6.23l103.16 88.79c7.67,6.29 6.97,8 17.77,8.09 24.66,0.18 47,11.21 69.28,20.17 14.09,5.67 31.62,11.34 47.47,10.91 3.72,-6.9 20.01,-72.53 25.05,-87.45 27.69,0 44.35,-7.93 64.59,-21.91 11.74,-8.1 21.95,-16.47 31.65,-26.45 5.51,-5.67 10.27,-7.21 14.82,-14.23 2.05,-3.15 4.2,-4.81 6.76,-7.34 11.71,-11.53 4.35,-9.81 17.03,-8.93 22.27,1.55 34.13,-26.54 45.34,-41.38l24.07 -34.06c6.52,-9.54 9.2,-20.11 13,-30.97 3.6,-10.28 0.65,-7.7 -0.28,-23.69 -1.39,-23.92 -5.27,-22.15 0.87,-40.98 3.82,-11.71 5.33,-22.78 6.69,-35.44 2.32,-21.58 -2.06,-58.13 0.36,-63.06 1.71,-3.5 3.27,-6.39 4.76,-9.35 3.06,-6.05 5.85,-12.43 9.17,-19.03 3.53,-6.99 17.55,-33.87 17.92,-37.87 -21.46,2.95 -17.37,6.68 -49.94,6.68 -13.65,0 -27.47,-4.88 -38.64,-8.71l-4.48 -89.8c-2.04,-1.33 -0.45,-0.78 -3.82,-0.9l-0.03 -43.11c0.01,-12.11 2.07,-12.46 -7.52,-14.97 -24.85,-6.5 -37.07,-26.91 -48.64,-48.28 -1.92,-3.56 -3.87,-7.91 -5.63,-12.02 -1.27,-2.97 -3.83,-10.68 -5.82,-12.71 -6.09,3.83 -13.54,6.94 -19.02,11.38z"/>
                <path id="${bay_cont_id}_ngjs2" data-name="Ekeremor" class="fil1bay" d="M578.63 266.6l0 29.39c-7.35,1.86 -30.66,9.39 -35.82,9.64 -1.06,-3.54 -1.56,-8.23 -3.98,-11.34 -5.07,6.35 -8.86,34.92 -10.88,46.11l-13.77 -10.91c-3.47,2.26 -11.84,10.35 -15.85,11.18 -2.41,-4.97 -5.68,-9.96 -7.79,-14.97 -4.03,0.83 -7.31,1.59 -11.92,2.59 -5.91,1.29 -5.28,0.71 -11.2,-1.61 -4.88,-1.92 -16.66,-6.82 -21.04,-7.58 -3.92,3.69 -12.27,29.22 -16.73,36.16 -3.67,-2.85 -8.44,-11.34 -13.58,-12.4 -7.58,-1.56 -9.14,8.99 -12.83,12.79 -5.61,-2.21 -19.1,-10.55 -25.58,-3.58 -4.53,4.86 1.37,13.04 -9.78,24.57 -16.23,16.79 -34.59,3.68 -56.82,3.95l0.71 18.37c-21.33,1.22 -30.08,-1.63 -44.41,-11.32 -4.8,-3.24 -5.35,-4.73 -8.02,-8.67 -3.92,-5.79 -5.9,-9.02 -11.83,-11.94 -9.86,-4.84 -15.34,-3.9 -27.18,-5.28l-0.85 -10.11c-58.46,10.24 -77.29,-35.74 -83.01,-37.1l-40.29 -1.82c-1.4,-5.85 2.43,-24.57 2.22,-31.73 -2.02,-1.35 -39.29,-20.05 -43,-20.53 -21.11,-2.71 -33.83,9.6 -45.98,15.42 1.2,5.17 43.69,90.23 44.84,92.4 8.02,15.11 15.11,30.52 22.63,46.06 8.72,18.03 6.38,18.89 6.17,45.25 -0.1,13.38 11.2,23.47 16.15,35.45 2.32,5.61 -1.53,23.96 0.42,32.15 0.81,3.42 15.53,25.39 19.13,31.93 11.47,20.83 32.25,52.46 45.49,75.16 1.98,3.4 4.72,6.98 6.39,10.3 2.35,4.66 0.54,10.94 0.89,16.79 16.19,9.33 6.54,8.09 22.65,12.54 12.5,3.44 13.66,12.66 15.82,19.37 6.08,-0.06 13.77,-2.51 21.18,-3.43 3.39,-5.38 4.88,-15 9.23,-19.81l14.52 19.78c4.43,-2.67 8.4,-5.98 12.97,-9.09 6.62,-4.49 9.1,1.74 16.23,1.45l-3.43 -32.33c5.01,-1.64 34.29,-16.98 37.28,-17.36 2.12,-0.27 12.87,1.56 15.7,2.29 1.69,-7.24 3.1,-16.42 4.46,-23.86 1.79,-9.78 -2.35,-8.75 16.73,-3.47 7.44,2.05 14.99,4.35 22.44,6.5 6.85,1.98 16.77,5.74 23.73,6.22 1.18,-2.91 13.72,-15.78 16.16,-17.8 4.78,1.84 9.44,4.5 14.25,6.82 8.15,3.92 6.17,4.75 14.68,0.72l58.36 -26.2c5.02,-2.25 9.32,-4.49 14.55,-6.69l44.28 -19.91c25.75,-10.32 61.52,-28.45 88.02,-39.52 -3.74,-12.02 -9.32,-13.46 -11.08,-36.14 -1.31,-16.87 11.2,-36.3 11.07,-62.39l1.49 -48.42c0,-14.26 0.18,-10.5 -7.07,-18.01 -7.21,-7.48 -29.08,-36.72 -26.42,-46.58 1.7,-6.32 4.21,-12.23 6.56,-18.27 9.33,-24.11 9.42,-20.51 1.14,-34.39 -6.42,-10.76 -19.39,-19.78 -30.54,-17.89 -2.4,6.91 -3.63,11.93 -5.69,19.09 -2.45,8.5 -6.39,7.11 -12.17,12.01z"/>
                <path id="${bay_cont_id}_ngjs3" data-name="Brass" class="fil1bay" d="M1173.62 715.87c-32,0 -15.92,-0.07 -39.96,31.23 -10.68,13.91 -20.39,26.33 -33.18,39.01 -5.91,5.86 -11.71,12.49 -18.26,17.81 -5.1,4.14 -3.4,5.95 -2.31,12.5 0.86,5.14 2.14,10.75 3.24,15.39 2.04,8.65 5.26,19.72 8.36,27.56l8.05 18.49c1.79,3.87 0.59,17.74 0.59,22.77 0,10.35 6.26,18.47 10.77,24.82 2.5,3.51 4.82,23.16 5.9,29.36 1.48,8.54 10.03,53.68 10.03,61.15 0,3.41 -29.46,49.6 -33.71,55.98l-41.21 -1.52c-0.31,6.13 -4.13,11.64 -8.16,13.8 -16.15,8.67 -36.43,4.19 -54.23,2.58 -7.21,-0.65 -11.39,-4.03 -17.79,-6.35 -13.25,-4.8 -27.8,-8.6 -42.74,-10.88l-4.24 -1.04 -5.38 -7.88c-3.1,-5.59 -5.26,-10.82 -7.92,-16.77 -2.46,-5.5 -4.52,-11.05 -7.01,-16.75 -2.5,-5.74 -6.79,-12.13 -7.95,-16.63 -24.25,3 -37.02,0.29 -59.19,-13.89 -5.85,-3.73 -11.57,-7.14 -17.04,-11.16 -4.48,-3.29 -3.84,-3.14 -4.53,-9.63 -2.91,-27.29 -2.59,-58.47 11.45,-82.65 2.91,-5.02 5.66,-6.85 2.46,-12.5 -9.62,13.41 -17.95,29.57 -39.15,31.02 -15.69,1.06 -6.3,-1.57 -16,8.92 -6.59,7.14 -15.19,16.75 -22.53,22.37 -9.98,7.64 -18.41,16.62 -29.35,23.49 -3.55,2.24 -6.83,5.04 -11.02,7.47 -15.19,8.79 -32.9,17.16 -54.34,17.16 -2.5,16.18 -20.62,68.08 -23.74,86.79 -36.38,0 -49.9,-9.55 -80.28,-20.91 -8.82,-3.3 -16.48,-5.47 -26.09,-7.92 3.73,4.34 42.11,20.18 50.07,24.42 11.69,6.2 24.93,11.44 35.81,17.88 4.55,2.69 8.95,5.14 13.44,7.72 20.57,11.85 10.99,8.87 11.5,30.45l0.35 3.27c9.09,1.43 17.98,4.43 27.14,6.68 26.98,6.62 53.13,14.62 80.08,20.96 0.51,3.77 4.01,12.54 5.68,15.38 11.29,-4.46 85.77,-4.64 107.02,-6.85 5.61,-0.59 11.93,-1.07 17.8,-1.33 5.67,-0.26 11.86,-1.46 18.23,-1.46l6.36 -20.02c14.24,2.24 41.42,8.1 54.63,7.4l148.42 -13.51c-8.54,-15.51 6.54,-35.41 41.58,-13.85 10.34,6.37 6.83,1.58 26.9,-3.47 11.2,-2.82 19.53,-3.62 31.93,-5.04 11.94,-1.37 24.23,0.28 36.26,-0.66l-3.18 -22.79c-4.54,-0.35 -9.27,-2.2 -14.21,-3.44 -2.73,-0.69 -4.35,-1.13 -7.02,-1.84 -1.86,-0.49 -5.21,-1.03 -6.34,-2.69 -5.3,-7.79 -8.57,-53.29 -9.9,-67.08 -1.17,-12.16 -0.7,-12.8 3.95,-21.6 4.01,-7.58 31.35,-64.94 35.21,-69.34 -3.34,-8.88 -11.52,-16.34 -1.09,-26.8 1.74,-1.75 3.31,-2.69 5.17,-4.55 4.68,-4.65 9.13,-10.88 14.34,-14.65 -5.91,-3.99 -10.64,-2.61 -17.15,-10.26 -3.51,-4.12 -8.06,-13.37 -9.43,-18.9 1.43,-2.69 4.06,-4.36 6.41,-6.16 -4.67,-8.99 -35.34,-21.79 -35.34,-57.23 0,-12.17 20.79,-39.14 29.62,-47.87l39.85 -38.49c4.85,-4.17 8.67,-7.66 13.59,-11.94l13.94 -12.49c-13.21,-5.08 -17.03,-10.54 -34.41,-12.74 -14.82,-1.88 -27.82,1.44 -39.2,6.93 -10.91,5.26 -19.69,11.64 -27.79,18.86 -4.22,3.75 -7.86,7.81 -11.95,11.84 -2.81,2.78 -8.41,10.7 -11.81,12.07z"/>
                <path id="${bay_cont_id}_ngjs4" data-name="Sagbama" class="fil1bay" d="M1189.44 10.64c9.51,16.14 12.77,24.27 8.24,44.29 -0.5,2.22 -0.81,3.52 -1.35,5.59 -0.98,3.73 -0.97,3.65 -2.29,4.73 -6.63,5.44 -24.77,5.96 -33.63,5.96 -7.04,0 -21.5,-4.13 -27.44,-5.93 -19.71,18.76 -7.32,22.25 -42.99,22.25 -13.25,0 -39.61,-10.75 -54.68,-14.26 -2.48,-0.57 -7.13,-1.27 -8.58,-1.84 -3.78,3.03 -5.69,6.13 -10.49,8.89 -8.19,4.72 -20.68,8.01 -28.35,12.11 -3.4,1.82 -9.61,5.59 -11.82,8.48 -2.99,3.91 -5.41,7.41 -7.3,12.07 -3.44,8.51 -1.59,7.66 0.7,15.55l8.94 31.7c-27.74,19.48 -57.65,-4.44 -81.24,-4.44 -6.92,0 -21.05,6.43 -21.05,11.48l0.47 75.29c-10.45,0.16 -21.01,0.09 -31.37,0.01 -10.79,-0.08 -13,1.2 -19.57,13.42 -28.38,52.9 -46.67,-22.37 -79.76,-2.32 -18.46,11.19 -7.89,30.89 -14.82,50.2l-28.74 5.92c-12.32,2.68 -6.91,0.79 -26.43,-3.95 -19.77,-4.8 -13.8,-3.9 -21.01,-13.39l-11.34 -15.02c-2.25,-2.93 -1.77,-3.2 -4.76,-4.66 -10.79,39 -23.17,29.41 6.65,67.88 1.71,2.21 1.36,2.49 3.26,4.66 15.71,17.97 10.79,2.45 10.8,29.73 0.01,9.01 -1.2,56.42 -2.39,61.2 -7.92,31.78 -19.62,54.11 6.28,81.88 3.25,3.49 1.23,2.79 3.32,6.35 2.29,3.93 6.35,6.1 8.37,10.83 -7.84,6.75 -12.43,11.06 -15.67,23.67 -4.08,15.83 -5.31,28.6 -5.05,44.77l81.73 -7.44c8.38,-21.17 8.88,-50.65 1.27,-72.14 -2.2,-6.2 1.59,-12.83 5,-24.04 8.23,-27.18 9.87,-42.73 9.87,-70.49 0,-18.41 -7.41,-22.54 -16.14,-39.68 -2.93,-5.75 -19.73,-31.63 -20.17,-36.04 4.07,-3.55 30.56,-18.18 33.35,-18.6 2.69,9.89 15.53,36.77 20.95,45.22 9.24,14.43 17.46,24.7 35.26,30.45 0.68,-1.2 10.28,-28.83 15,-38.67 8.62,-17.95 10.34,-20.13 18.4,-35.3 2.51,-4.71 6.58,-11.29 10.06,-16.36 1.97,-2.88 3.25,-4.64 5.38,-7.81 2.14,-3.18 3.92,-6.05 5.7,-8.39l61.17 -73.49c1.41,-2.11 11.25,-12.99 13.31,-14.02 17.83,-8.85 105.1,-9.98 134.7,-13.33 11.87,-1.34 4.73,0.86 19.57,-7.57 31.76,-18.06 30.85,-16.76 62.81,-31.45 33.88,-15.59 36,-24.79 48.26,-32.73 3.01,-1.94 4.49,-3.89 6.91,-6.31 1.2,-1.2 2.55,-2.37 3.47,-3.56 1.58,-2.02 1.03,-2.07 2.85,-4.21 3.61,-4.24 8.84,-9.2 12.87,-13.53l25.95 -27.74c9.63,-9.57 7.92,-4.26 9.11,-18.4l1.62 -25.53c0.25,-8.57 1.49,-17.24 1.49,-25.61 -4.23,-0.82 -65.11,3.15 -74.66,3.67z"/>
                <path id="${bay_cont_id}_ngjs5" data-name="Nambe" class="fil1bay" d="M879.97 791c-2.37,4.11 -5.16,14.38 -7.24,20.1 -5.96,16.32 -3.19,13.23 -13.94,27.39l-17.33 24.89c-6.27,9.25 -8.63,6.11 -3.72,17.5 3.45,8.01 1.5,4.54 -5.69,18.08 -11.12,20.94 -11.99,47.97 -9.83,72.12 0.56,6.26 -0.46,6.93 3.61,9.68 5.27,3.58 11.25,7.57 16.15,10.26 12.6,6.92 24.81,14.18 41.1,14.18 4.79,0 11.42,-3.09 15.85,-3.42 9.31,13.38 16.31,33.86 23.95,50.11 3.75,7.98 3.64,9.99 13,11.81 13.59,2.62 26.27,5.89 38.79,10.37 6.48,2.32 11.13,5.51 18.43,6.11 12.37,1.03 35.81,5.65 46.84,-2.48 4.49,-3.31 5.57,-8.32 6.05,-14.59l42.22 1.63c3.32,-0.67 14.4,-21.76 16.26,-24.63 17.49,-26.99 15.94,-22.58 12.47,-42.3l-10 -60.4c-1.22,-7.65 -1.98,-7.49 -5.11,-12.51 -12.86,-20.64 -8.35,-26.23 -8.36,-40.12 0,-4.61 -4.26,-11.92 -6.15,-16.65 -4.49,-11.21 -8.18,-22.82 -11.07,-34.89 -1.49,-6.22 -2.4,-12.31 -3.99,-19.45 -5.83,2.58 -1.69,2.41 -13.1,2.23l-46.55 -1.45c-7.1,-25.34 -29.45,-50.52 -56.74,-47.1 -17.53,2.19 -25.35,5.98 -37.72,14.19 -5.14,3.42 -13.09,10.78 -14.87,11.04 -4.88,0.72 -17.52,-2.22 -23.31,-1.7z"/>
                <path id="${bay_cont_id}_ngjs6" data-name="Ogbia" class="fil1bay" d="M944.71 544.51c-6.83,0 -10.66,1.24 -15.71,6.73 -3.68,3.99 -5.09,6.98 -7.8,11.55 -1.81,3.05 -2.85,3.34 -3.85,5.76l-9.07 20.07c-6.4,13.32 -25.04,46.2 -24.75,55.82 0.92,29.91 3.73,37.97 -1.67,71.02 -5.48,33.54 -10.13,11.42 -5.56,58.18 0.78,7.98 -1.68,10.45 5.84,10.55 16.68,0.24 15.31,4.9 24.37,-2.79 25.96,-22.03 64.44,-31.73 93.28,-3.62 7.61,7.42 13.75,18.75 18.33,30.07l45.45 0.76c6.33,0.03 20.65,-16.67 25.45,-20.78 3.99,-3.41 7.32,-7.82 11.2,-11.67 8.13,-8.07 24.41,-27.8 30.96,-37.68 3.33,-5.03 16.45,-25.11 16.92,-29.77 -3.29,-2.46 -5.4,-4.16 -8.48,-6.52l-8.31 -6.69 -1.01 -41.94 -19.12 9.28c-1.91,-2.31 -17.05,-43.49 -19.08,-49.5 -5.52,-16.33 -12.43,-36.8 -9.87,-56.95 4.49,-35.27 16.69,-44.96 33.86,-68.96 7.06,-9.86 15.18,-22.79 10.21,-36.02 -1.8,-4.78 -5.65,-5.83 -13.43,-10.64 -16.93,10.8 -34.21,23.59 -51.39,35.18 -3.81,2.58 -6.04,4.64 -10.31,7.33 -4.66,2.93 -6.75,4.65 -10.43,7.16l-41.12 28.42c-3.55,2.6 -6.7,5.06 -10.32,7.34 -7.65,4.82 -14.34,9.66 -20.84,14.31 -20.43,14.64 -9.49,4 -23.75,4z"/>
                <path id="${bay_cont_id}_ngjs7" data-name="Yenegoa" class="fil1bay" d="M1083.2 207.51c3.82,7.31 8.77,32.11 7.99,43.41 -1.08,15.7 -3.82,13.86 -19.76,31.6l-11.52 14.06c-4.17,4.84 -8.3,8.61 -12.37,13.11 -7.51,8.3 -4.17,6.02 -17.49,7.93 -30.36,4.35 -19.48,-0.49 -25.8,20.13 -1.8,5.84 -3.28,9.09 -6.65,13.64 -3.07,4.17 -5.92,6.58 -11.01,9.19 -6.67,3.41 -9.9,1.88 -16.05,3.6 -3.38,-5.55 -4.11,-13.84 -7.34,-17.31 -5.38,4.22 -12.3,11.04 -15.4,18.06 -1.62,3.67 -3.21,8.12 -3.88,13.02 -1.59,11.63 -2.19,7.35 -13.56,20.56 -11.75,13.66 -29.52,28.92 -43.87,40.68l-48.53 36.94c-3.65,2.51 -9.18,0.48 -14.52,1.15l3.93 83.92c15.76,10.56 50.27,7.57 69.2,3.51 10.04,-2.15 17.17,-2.64 19.72,-7.69 5.22,-10.35 17.32,-23.44 33.44,-18.89 10.48,2.95 4.71,2.86 18.27,-5.97 7.08,-4.61 10.58,-7.62 16.04,-11.29 25.38,-17.08 56.41,-40 80.24,-55.32 8.83,-5.68 42.22,-30.1 48.48,-33.2l-20.03 -18.51c0.89,-6.53 24.17,-52.48 28.83,-62.68 11.38,-24.86 45.46,-90.99 58.77,-113.76 2.48,-4.25 1.51,-4.23 5.98,-6.38 5.37,-2.57 9.99,-5.09 15.23,-7.7l15.56 -7.29c7.86,-3.85 29.15,-10.85 32.8,-13.54 -1.07,-2.56 -7.52,-24.1 -7.16,-26.09l8.45 -16.92c1.87,-3.05 2.17,-2.88 2.94,-6.69 -4.47,-3.06 -12.09,-11.7 -16.5,-16.07 -3.02,-3 -5.32,-5.33 -8.4,-8.34 -4.15,-4.06 -3.72,-7.68 -6.3,-9.96 -8.02,10.83 -32.67,32.87 -45.14,39.87 -21.78,12.21 -15.73,9.7 -38.11,19.14 -17.16,7.24 -41.98,20.62 -56.48,30.08z"/>
                <path id="${bay_cont_id}_ngjs8" data-name="Kolokum_x002f_Opokuma" class="fil1bay" d="M819.73 469.52c22.96,0.63 8.47,3.03 25.82,-7.87l20.51 -14.72c8.27,-6.04 19.02,-16 28.98,-23.84 2.31,-1.83 7.31,-6.59 9.6,-8.89 6.07,-6.09 11.45,-11.54 17.58,-17.61 3.37,-3.34 5.01,-5.3 8.5,-9.11 4.55,-4.97 5.36,-2.86 6.39,-11.34 2.12,-17.43 19.32,-36.95 30.46,-40.63 1.89,5.71 4.95,17.13 7.95,21.17 14.4,-4.31 19.93,-9.56 23.73,-27.46 0.72,-3.41 1.68,-11.89 2.69,-14.53l30.98 -4.49c5.59,-0.64 5.29,-0.69 8.52,-3.96 8.46,-8.58 9.86,-10.64 16.74,-19.33l17.07 -19.05c5.44,-5.4 8.31,-5.54 8.63,-16.03 0.26,-8.65 -0.06,-14.82 -1.67,-22.17 -1.5,-6.88 -3.97,-13.54 -5.06,-19.72 -10.59,0.19 -20.46,2.1 -31.21,2.22 -9.82,0.1 -21.18,1.1 -31.73,1.48 -19.4,0.7 -41.78,2.88 -60.29,6.19 -4.16,0.75 -9.7,1.74 -13.02,2.58 -6.01,1.52 -5.93,4.13 -8.87,7.92 -3.42,4.4 -27.69,28.76 -35.34,38.57l-32.74 42.15 -30.88 51.83c-3.97,8.09 -18.5,38.86 -19.41,46.72 -0.57,5.05 4.06,5.77 5.59,9.86 1.22,3.24 0.48,44.65 0.48,50.06z"/>
              </g>
              <g id="${bay_cont_id}__2586960652384">
              <g id="${bay_cont_id}_visnames">
                <text x="291.04" y="477.2"  class="fil2bay fnt0bay">Ekeremor</text>
                <text x="1006.17" y="136.4"  class="fil2bay fnt0bay">Sagbama</text>
                <text x="1190.54" y="329.78"  class="fil2bay fnt0bay">Kolokum/Opokuma</text>
                <text x="935.13" y="443.98"  class="fil2bay fnt0bay">Yenegoa</text>
                <text x="956.31" y="661.44"  class="fil2bay fnt0bay">Ogbia</text>
                <text x="915.97" y="912.08"  class="fil2bay fnt0bay">Nambe</text>
                <text x="731.62" y="1080.98"  class="fil2bay fnt0bay">Brass</text>
                <text x="457.86" y="784.73"  class="fil2bay fnt0bay">Southern Ijaw</text>
               </g>
               <g>
                <path class="fil3bay" d="M947.58 320.34l18.66 -9.33 0 18.66 -18.66 -9.33zm233.95 0.76l-216.27 0 0 -1.52 216.27 0 0 1.52z"/>
               </g>
              </g>
             </g>
            </svg>            
            <div>
        </div>
     `;
     let bayelsa = new MakeMap(bay_cont_id)
     bayelsa.sketchMap(bay_sketch)            
 $(document).ready(function(){    
     bayelsa.CalMap(bayelsa.propertyMaker());
 })