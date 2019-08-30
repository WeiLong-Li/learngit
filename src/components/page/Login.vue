<template>
<div>
       <object  type='application/x-vlc-plugin' id='Object1' width="500" height="400" events='True' pluginspage="http://www.videolan.org" codebase="http://downloads.videolan.org/pub/videolan/vlc-webplugins/2.0.6/npapi-vlc-2.0.6.tar.xz" >
         <param name='mrl' value='rtsp://192.168.88.120:8554/1' />
         <param name='volume' value='50' />
         <param name='autoplay' value='true' />
         <param name='loop' value='false' />
         <param value="transparent" name="wmode"> 
         
     </object >
 
    <br />
 
   <object  type='application/x-vlc-plugin' id='Object2' width="500" height="400" events='True' pluginspage="http://www.videolan.org" codebase="http://downloads.videolan.org/pub/videolan/vlc-webplugins/2.0.6/npapi-vlc-2.0.6.tar.xz" >
         <param name='mrl' value='rtsp://192.168.88.120:8555/1' />
         <param name='volume' value='50' />
         <param name='autoplay' value='true' />
         <param name='loop' value='false' />
         <param value="transparent" name="wmode">  
     </object >
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>