<template>
  <div>
    <input id="inputBatch" type="file"  v-on:change="batchExcel"  />
    <div id="demo"></div>
    <button v-on:click="downloadExl" onclick="downloadExl">导出</button>
  </div>

</template>

<script>
    export default {
        name: "BatchImport",
        data(){
          const data = {
            jsono:[{ //测试数据
              "保质期临期预警(天)": "adventLifecycle",
              "商品标题": "title",
              "建议零售价": "defaultPrice",
              "高(cm)": "height",
              "商品描述": "Description",
              "保质期禁售(天)": "lockupLifecycle",
              "商品名称": "skuName",
              "商品简介": "brief",
              "宽(cm)": "width",
              "阿达": "asdz",
              "货号": "goodsNo",
              "商品条码": "skuNo",
              "商品品牌": "brand",
              "净容积(cm^3)": "netVolume",
              "是否保质期管理": "isShelfLifeMgmt",
              "是否串号管理": "isSNMgmt",
              "商品颜色": "color",
              "尺码": "size",
              "是否批次管理": "isBatchMgmt",
              "商品编号": "skuCode",
              "商品简称": "shortName",
              "毛重(g)": "grossWeight",
              "长(cm)": "length",
              "英文名称": "englishName",
              "净重(g)": "netWeight",
              "商品分类": "categoryId",
              "这里超过了": 1111.0,
              "保质期(天)": "expDate"
            }],
          };
          return data;
        },
        methods:{
          batchExcel:function(){
            importf(document.getElementById("inputBatch"));
            /*
              FileReader共有4种读取方法：
              1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
              2.readAsBinaryString(file)：将文件读取为二进制字符串
              3.readAsDataURL(file)：将文件读取为Data URL
              4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'
             */
            var wb;//读取完成的数据
            var rABS = false; //是否将文件读取为二进制字符串

            function importf(obj) {//导入
              console.log("文件1");
              if(!obj.files) {
                return;
              }
              console.log("文件2");
              console.log(obj.files[0]);
              var f = obj.files[0];
              var reader = new FileReader();
              reader.onload = function(e) {
                var data = e.target.result;
                if(rABS) {
                  wb = XLSX.read(btoa(fixdata(data)), {//手动转化
                    type: 'base64'
                  });
                } else {
                  wb = XLSX.read(data, {
                    type: 'binary'
                  });
                }
                //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
                //wb.Sheets[Sheet名]获取第一个Sheet的数据
                document.getElementById("demo").innerHTML= JSON.stringify( XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) );
              };
              if(rABS) {
                reader.readAsArrayBuffer(f);
              } else {
                reader.readAsBinaryString(f);
              }
            }

            function fixdata(data) { //文件流转BinaryString
              var o = "",
                l = 0,
                w = 10240;
              for(; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
              o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
              return o;
            }

          },
          downloadExl:function(){
          }
        }
    }
</script>

<style scoped>

</style>
