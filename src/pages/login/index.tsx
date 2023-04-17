import { useEffect } from 'react';
import styles from './index.module.less';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import start from '@/assets/images/start.jpg';
function Login() {
  useEffect(() => {
    // const canvas = document.querySelector('#login');
    // // canvas.width = console.log(canvas);
    // // 初始化场景
    // const scene = new THREE.Scene();
    // scene.fog = new THREE.Fog(0x000000, 0, 10000);
    // // 增加背景
    // new THREE.TextureLoader().load(
    //   require('@/assets/images/sky.png'),
    //   (texture) => {
    //     const geometry = new THREE.BoxGeometry(
    //       window.innerWidth,
    //       window.innerHeight,
    //       1400
    //     ); // 创建一个球形几何体 SphereGeometry
    //     const material = new THREE.MeshBasicMaterial({
    //       map: texture,
    //       side: THREE.BackSide
    //     }); // 创建基础为网格基础材料
    //     const mesh = new THREE.Mesh(geometry, material);
    //     scene.add(mesh);
    //   }
    // );
    // 需要canvas画布
    const canvas: HTMLCanvasElement = document.querySelector(
      '.webgl'
    ) as HTMLCanvasElement;

    // 创建场景场景的大小和屏幕一样大
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);
    scene.fog = new THREE.Fog(0x1a1a1a, 1, 1000);

    // 创建坐标轴
    const axes = new THREE.AxesHelper(100);
    // 将坐标轴添加到场景中
    scene.add(axes);

    // 创建摄像机
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight
    );
    scene.add(camera);
    camera.position.set(20, 150, 700);

    // 环境观，让场景中的物体接收他的颜色，第二个为强度
    const light = new THREE.AmbientLight(0xdeedff, 1.5);
    scene.add(light);

    // 创建星球
    // const SphereMaterial = new THREE.MeshLambertMaterial({
    //   color: 0x03c03c
    // });
    // lety SphereGeometry = new THREE.SphereGeometry(80, 32, 32);
    // const planet = new THREE.Mesh(SphereGeometry, SphereMaterial);
    // scene.add(planet);

    // THREE.Loader().load();
    const loader = new THREE.TextureLoader();
    let geometry;
    let material;
    let plant;
    loader.load(start, (texture) => {
      geometry = new THREE.SphereGeometry(80, 32, 32); //球体模型
      material = new THREE.MeshBasicMaterial({
        map: texture
      }); //材质 将图片解构成THREE能理解的材质
      plant = new THREE.Mesh(geometry, material); //网孔对象 第一个参数是几何模型(结构),第二参数是材料(外观)
      scene.add(plant);
    });

    //     loader.load('src/assets/universe/venus.jpg', (texture) => {
    //       const geometry = new SphereGeometry(100, 20, 20) //球体模型
    //       const material = new MeshBasicMaterial({map: texture}) //材质 将图片解构成THREE能理解的材质
    //       const mesh = new Mesh(geometry, material)  //网孔对象 第一个参数是几何模型(结构),第二参数是材料(外观)
    //       venus.position.x -= 700
    //       venus.add(mesh)//添加到组里
    //       venusParent.add(venus)
    //   })

    // 作者：李振文
    // 链接：https://juejin.cn/post/6983938127911976990
    // 来源：稀土掘金
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

    // 创建圆环
    const TorusGeometry = new THREE.TorusGeometry(150, 8, 2, 120);
    const TorusMaterial = new THREE.MeshLambertMaterial({
      color: 0x40a9ff,
      wireframe: true
    });
    const ring = new THREE.Mesh(TorusGeometry, TorusMaterial);
    ring.rotation.x = Math.PI / 2;
    ring.rotation.y = -0.1 * (Math.PI / 2);
    scene.add(ring);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    });
    renderer.setClearColor(0xeeeeee);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    const cube = new THREE.BoxGeometry(20, 20, 20);
    const cubemasterial = new THREE.MeshBasicMaterial({ color: 'red' });
    const cubeMesh = new THREE.Mesh(cube, cubemasterial);
    scene.add(cubeMesh);
    // canvas.appendChild(renderer.domElement);
    renderer.render(scene, camera);

    const stars = new THREE.Group();
    for (let i = 0; i < 500; i++) {
      const geometry = new THREE.IcosahedronGeometry(Math.random() * 2, 0);
      const material = new THREE.MeshToonMaterial({ color: 0xeeeeee });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * 700;
      mesh.position.y = (Math.random() - 0.5) * 700;
      mesh.position.z = (Math.random() - 0.5) * 700;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;
      stars.add(mesh);
    }
    scene.add(stars);

    // canvas.addEventListener('change', () => {
    //   renderer.render(scene, camera);
    // });
    function animate() {
      console.log(geometry);
      plant && (plant.rotation.y += 0.005);
      ring && (ring.rotation.z -= 0.005);

      stars.rotation.y += 0.0009;
      stars.rotation.z -= 0.0003;
      requestAnimationFrame(animate);

      // required if controls.enableDamping or controls.autoRotate are set to true
      // controls.update();

      renderer.render(scene, camera);
    }
    animate();
  }, []);
  useEffect(() => {
    // const sizes = {
    //   width: window.innerWidth,
    //   height: window.innerHeight
    // };
    // // 初始化渲染器
    // const canvas = document.querySelector('canvas.webgl');
    // const renderer = new THREE.WebGLRenderer({
    //   canvas: canvas as HTMLCanvasElement
    // });
    // renderer.setSize(sizes.width, sizes.height);
    // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // // 初始化场景
    // const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x1a1a1a);
    // scene.fog = new THREE.Fog(0x1a1a1a, 1, 1000);
    // // 初始化相机
    // const camera = new THREE.PerspectiveCamera(40, sizes.width / sizes.height);
    // scene.add(camera);
    // camera.position.set(20, 100, 450);
    // // 初始化控制器
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // // 添加环境光
    // const light = new THREE.AmbientLight(0xdeedff, 1.5);
    // scene.add(light);
    // // 创建星球
    // const SphereMaterial = new THREE.MeshLambertMaterial({
    //   color: 0x03c03c,
    //   wireframe: true
    // });
    // const SphereGeometry = new THREE.SphereGeometry(80, 32, 32);
    // const planet = new THREE.Mesh(SphereGeometry, SphereMaterial);
    // scene.add(planet);
    // // 创建星球轨道环
    // const TorusGeometry = new THREE.TorusBufferGeometry(150, 8, 2, 120);
    // const TorusMaterial = new THREE.MeshLambertMaterial({
    //   color: 0x40a9ff,
    //   wireframe: true
    // });
    // const ring = new THREE.Mesh(TorusGeometry, TorusMaterial);
    // ring.rotation.x = Math.PI / 2;
    // ring.rotation.y = -0.1 * (Math.PI / 2);
    // scene.add(ring);
    // // 创建卫星
    // const IcoGeometry = new THREE.IcosahedronGeometry(16, 0);
    // const IcoMaterial = new THREE.MeshToonMaterial({ color: 0xfffc00 });
    // const satellite = new THREE.Mesh(IcoGeometry, IcoMaterial);
    // scene.add(satellite);
    // // 创建星星
    // const stars = new THREE.Group();
    // for (let i = 0; i < 500; i++) {
    //   const geometry = new THREE.IcosahedronGeometry(Math.random() * 2, 0);
    //   const material = new THREE.MeshToonMaterial({ color: 0xeeeeee });
    //   const mesh = new THREE.Mesh(geometry, material);
    //   mesh.position.x = (Math.random() - 0.5) * 700;
    //   mesh.position.y = (Math.random() - 0.5) * 700;
    //   mesh.position.z = (Math.random() - 0.5) * 700;
    //   mesh.rotation.x = Math.random() * 2 * Math.PI;
    //   mesh.rotation.y = Math.random() * 2 * Math.PI;
    //   mesh.rotation.z = Math.random() * 2 * Math.PI;
    //   stars.add(mesh);
    // }
    // scene.add(stars);
    // // 页面缩放事件监听
    // window.addEventListener('resize', () => {
    //   sizes.width = window.innerWidth;
    //   sizes.height = window.innerHeight;
    //   // 更新渲染
    //   renderer.setSize(sizes.width, sizes.height);
    //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    //   // 更新相机
    //   camera.aspect = sizes.width / sizes.height;
    //   camera.updateProjectionMatrix();
    // });
    // let rot = 0;
    // // 动画
    // const axis = new THREE.Vector3(0, 0, 1);
    // const tick = () => {
    //   // 更新渲染器
    //   renderer.render(scene, camera);
    //   // 给网格模型添加一个转动动画
    //   rot += Math.random() * 0.8;
    //   const radian = (rot * Math.PI) / 180;
    //   // 星球位置动画
    //   planet && (planet.rotation.y += 0.005);
    //   // 星球轨道环位置动画
    //   ring && ring.rotateOnAxis(axis, Math.PI / 400);
    //   // 卫星位置动画
    //   satellite.position.x = 250 * Math.sin(radian);
    //   satellite.position.y = 100 * Math.cos(radian);
    //   satellite.position.z = -100 * Math.cos(radian);
    //   satellite.rotation.x += 0.005;
    //   satellite.rotation.y += 0.005;
    //   satellite.rotation.z -= 0.005;
    //   // 星星动画
    //   stars.rotation.y += 0.0009;
    //   stars.rotation.z -= 0.0003;
    //   // 更新控制器
    //   controls.update();
    //   // 页面重绘时调用自身
    //   window.requestAnimationFrame(tick);
    // };
    // tick();
  }, []);
  return <canvas className='webgl' />;
}

export default Login;
