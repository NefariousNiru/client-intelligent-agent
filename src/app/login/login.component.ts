import { Component, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  private clientId = 'YOUR_AZURE_CLIENT_ID';
  private tenantId = 'common';
  private redirectUri = 'http://localhost:8000/auth/callback';

  loginWithMicrosoft() {
    const authUrl = `https://login.microsoftonline.com/${this.tenantId}/oauth2/v2.0/authorize?
      client_id=${this.clientId}
      &response_type=code
      &redirect_uri=${encodeURIComponent(this.redirectUri)}
      &scope=Mail.Read Calendars.Read OnlineMeetings.Read User.Read
      &response_mode=query`;
    window.location.href = authUrl;
  }

  ngAfterViewInit() {
    this.initBackgroundAnimation();
  }

  private initBackgroundAnimation() {
    const canvas = document.getElementById('animationCanvas') as HTMLCanvasElement;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Soft Ambient Lighting
    const light = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(light);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    // Array to store objects
    const objects: THREE.Mesh[] = [];

    // Glassy Cube Geometry
    const cubeGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const cubeMaterial = new THREE.MeshStandardMaterial({
      color: 0x0078D4,
      transparent: true,
      opacity: 0.4,
      roughness: 0.1,
      metalness: 0.6
    });

    // Floating Tetrahedrons
    const tetraGeometry = new THREE.TetrahedronGeometry(0.5);
    const tetraMaterial = new THREE.MeshStandardMaterial({
      color: 0x00A4EF,
      transparent: true,
      opacity: 0.4,
      roughness: 0.2,
      metalness: 0.6
    });

    // Create Multiple Shapes
    for (let i = 0; i < 15; i++) {
      const object = Math.random() > 0.5
        ? new THREE.Mesh(cubeGeometry, cubeMaterial)
        : new THREE.Mesh(tetraGeometry, tetraMaterial);

      object.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      );

      object.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      scene.add(object);
      objects.push(object);
    }

    camera.position.z = 5;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);

      objects.forEach((obj, i) => {
        obj.rotation.x += 0.005;
        obj.rotation.y += 0.005;
        obj.position.y += Math.sin(Date.now() * 0.0005 + i) * 0.002;
      });

      renderer.render(scene, camera);
    }

    animate();
  }
}
