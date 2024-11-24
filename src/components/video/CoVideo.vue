<template>
  <div class="co-video" :style="videoStyle">
    <video ref="videoPlayer" controls muted />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

const props = defineProps<{
  videoList: string[];
  width: string | number;
  height: string | number;
}>();
const { videoList, width, height } = props;

const videoPlayer = ref<HTMLVideoElement | null>(null);

const videoStyle = computed(() => {
  return {
    width: `${String(width)}px`,
    height: `${String(height)}px`,
  };
});

// 初始化 MediaSource 对象
const mediaSource = new MediaSource();
let sourceBuffer: SourceBuffer | null = null;
let currentIndex: number = 0;

// 处理 sourceOpen 事件
const handleSourceOpen = () => {
  try {
    sourceBuffer = mediaSource.addSourceBuffer(
      'video/webm; codecs="vp8, vorbis"'
    );
  } catch (error) {
    console.error('无法添加 sourceBuffer:', error);
  }

  if (sourceBuffer) {
    sourceBuffer.addEventListener('updateend', () => {
      console.log('视频数据添加完成', sourceBuffer?.buffered);
      console.log('mediaSource 状态:', mediaSource.readyState);

      // 只在一个视频段加载完成后再加载下一个
      preloadNextSegment();
    });
  }

  // 加载第一个段
  preloadNextSegment();
};

// 加载下一个视频段
const preloadNextSegment = () => {
  if (currentIndex < videoList.length) {
    loadSegment(currentIndex);
  } else {
    // 确保所有段加载完成后再调用 endOfStream
    if (
      mediaSource.readyState === 'open' &&
      sourceBuffer &&
      !sourceBuffer.updating
    ) {
      mediaSource.endOfStream();
      videoPlayer.value
        ?.play()
        .catch((error) => console.error('播放错误:', error));
    }
  }
};

// 加载指定索引的视频段
const loadSegment = (index: number): void => {
  fetch(videoList[index])
    .then((response) => response.arrayBuffer())
    .then((data) => {
      if (
        sourceBuffer &&
        !sourceBuffer.updating &&
        mediaSource.readyState === 'open'
      ) {
        console.log('添加视频段数据');
        sourceBuffer.appendBuffer(new Uint8Array(data));
        currentIndex++; // 加载完后递增 currentIndex
      }
    })
    .catch((error) => {
      console.error('加载视频段失败:', error);
    });
};

// 控制台检查视频类型支持情况
console.log(MediaSource.isTypeSupported('video/webm; codecs="vp8, vorbis"'));
console.log(
  MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')
);

// 组件挂载时
onMounted(() => {
  if (videoPlayer.value) {
    videoPlayer.value.src = URL.createObjectURL(mediaSource);
  }
  mediaSource.addEventListener('sourceopen', handleSourceOpen);
});
</script>

<style scoped>
.co-video {
  margin: 0 auto;

  video {
    width: 100%;
    height: 100%;
  }
}
</style>
