import { useEffect } from 'react';
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  FileLoader,
  Object3D,
  TextureLoader,
  MeshPhongMaterial,
  SphereGeometry,
  AmbientLight,
  PointLight,
  Group,
  Vector3,
  PointsMaterial
} from 'three';
import { geoMercator } from 'd3';
import earthBg from '@/assets/images/earth_bg.png';
function Home() {
  // const

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    // 创建场景
    const scene = new Scene();
    // 创建相机
    const camera = new PerspectiveCamera(60, width / height, 1, 30000);
    // const distance = width / 2 / Math.tan(Math.PI / 12);
    // const zAxisNumber = Math.floor(distance - 1400 / 2);
    // camera.position.set(0, 0, zAxisNumber);
    camera.lookAt(scene.position);
    // 创建渲染器
    const renderer = new WebGLRenderer();
    // 光源
    const ambientLight = new AmbientLight(0xffffff, 1);
    // 2.创建点光源，位于场景右下角
    const light_rightBottom = new PointLight(0x0655fd, 5, 0);
    light_rightBottom.position.set(0, 100, -200);
    // 3.把光源放入场景中
    scene.add(light_rightBottom);
    scene.add(ambientLight);

    // 随便画个正方形
    // const geometry = new BoxGeometry();
    // const material1 = new MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new Mesh(geometry, material1);
    // scene.add(cube);
    renderer.setSize(width, height);
    (document.querySelector('#map') as HTMLDivElement).appendChild(
      renderer.domElement
    );
    // // 画一个地球
    // // 加载纹理
    // const texture = new TextureLoader().load(earthBg);
    // // 创建网格材质
    // const material = new MeshPhongMaterial({ map: texture, blendDstAlpha: 1 });
    // // 创建几何体
    // const sphereGeometry = new SphereGeometry(50, 64, 32);
    // // 创建网格
    // const sphere = new Mesh(sphereGeometry, material);
    // // 创建一个组
    // const sphereGroup = new Group();
    // sphereGroup.add(sphere);

    // 确定位置
    // sphereGroup.position.x = -400;
    // sphereGroup.position.y = 200;
    // sphereGroup.position.z = -200;

    // // 添加进场景中
    // scene.add(sphereGroup);
    // 生成网格

    // 加载json数据

    // 生成星空背景

    function animation() {}

    animation();

    // 绘制
    renderer.render(scene, camera);
  }, []);
  // alert(99);
  return <div id='map' />;
}

export default Home;
