import * as DCL from 'decentraland-api'
import { createElement } from 'decentraland-api'
import { Vector3, Quaternion} from "babylonjs";

const networkHz = 6 // for timing|timer
const interval = 1000 / networkHz // for timing|timer
const BABYLON = require('babylonjs'); // for babylon.js

export interface IState {

	AvatarPositionX: number,
	AvatarPositionZ: number,
	AvatarBallAngleXZ: number,
	aimingplanevisible: string,
	clickswitch: number,
	powertimingstate: number,
	sphereXposition: number,
	sphereYposition: number,
	sphereYrotation: number,
	spherematerial: string,
	sphereposition: Vector3,
	sphererotation: Quaternion,
	sphereradius: number,
	sphere2Xposition: number,
	sphere2Yposition: number,
	sphere2Yrotation: number,
	sphere2material: string,
	sphere2position: Vector3,
	sphere2rotation: Quaternion,
	sphere2radius: number,
	wall1PositionX: number,
	wall1PositionY: number,
	wall1PositionZ: number,
	wall1height: number,
	wall1width: number,
	wall1depth: number,
	wall2PositionX: number,
	wall2PositionY: number,
	wall2PositionZ: number,
	wall2height: number,
	wall2width: number,
	wall2depth: number,
	wall3PositionX: number,
	wall3PositionY: number,
	wall3PositionZ: number,
	wall3height: number,
	wall3width: number,
	wall3depth: number,
	wall4PositionX: number,
	wall4PositionY: number,
	wall4PositionZ: number,
	wall4height: number,
	wall4width: number,
	wall4depth: number,
	box2PositionX: number,
	box2PositionY: number,
	box2PositionZ: number,
	box2height: number,
	box2width: number,
	box2depth: number
}

export default class raintest extends DCL.ScriptableScene {

state: IState = {

	AvatarPositionX: 0,
	AvatarPositionZ: 0,
	AvatarBallAngleXZ: 0,
	aimingplanevisible: "#noaimingvisible",
	clickswitch: 0,
	powertimingstate: 0,
	sphereXposition: 0,
	sphereYposition: 1,
	sphereYrotation:0,
	sphereposition: new Vector3(0, 0, 0),
	sphererotation: new Quaternion(0, 0, 0, 0),
	sphereradius: 0.2,
	spherematerial:"#glasseffect",
	sphere2Xposition: 0,
	sphere2Yposition: 1,
	sphere2Yrotation:0,
	sphere2position: new Vector3(0, 0, 0),
	sphere2rotation: new Quaternion(0, 0, 0, 0),
	sphere2radius: 0.2,
	sphere2material:"#glasseffect",
	wall1PositionX: 0,
	wall1PositionY: 0.6,
	wall1PositionZ: -1.15,
	wall1height: 1,
	wall1width: 3,
	wall1depth: 0.1,
	wall2PositionX: -1.5,
	wall2PositionY: 0.6,
	wall2PositionZ: 0,
	wall2height: 1,
	wall2width: 0.1,
	wall2depth: 2.4,
	wall3PositionX: 0,
	wall3PositionY: 0.6,
	wall3PositionZ: 1.15,
	wall3height: 1,
	wall3width: 3,
	wall3depth: 0.1,
	wall4PositionX: 1.5,
	wall4PositionY: 0.6,
	wall4PositionZ: 0,
	wall4height: 1,
	wall4width: 0.1,
	wall4depth: 2.4,
	box2PositionX: 0,
	box2PositionY: 0.5,
	box2PositionZ: 0,
	box2height: 1,
	box2width: 3,
	box2depth: 2.2
  };

    sceneDidMount() {

		// babylon.js
		var sphere_radius = this.state.sphereradius; var sphere_y_position = this.state.sphereYposition;
		var sphere2_radius = this.state.sphere2radius; var sphere2_y_position = this.state.sphere2Yposition;

		var wall1_PositionX = this.state.wall1PositionX; var wall1_PositionY = this.state.wall1PositionY; var wall1_PositionZ = this.state.wall1PositionZ; var wall1_height = this.state.wall1height; var wall1_width = this.state.wall1width; var wall1_depth = this.state.wall1depth;
		var wall2_PositionX = this.state.wall2PositionX; var wall2_PositionY = this.state.wall2PositionY; var wall2_PositionZ = this.state.wall2PositionZ; var wall2_height = this.state.wall2height; var wall2_width = this.state.wall2width; var wall2_depth = this.state.wall2depth;
		var wall3_PositionX = this.state.wall3PositionX; var wall3_PositionY = this.state.wall3PositionY; var wall3_PositionZ = this.state.wall3PositionZ; var wall3_height = this.state.wall3height; var wall3_width = this.state.wall3width; var wall3_depth = this.state.wall3depth;
		var wall4_PositionX = this.state.wall4PositionX; var wall4_PositionY = this.state.wall4PositionY; var wall4_PositionZ = this.state.wall4PositionZ; var wall4_height = this.state.wall4height; var wall4_width = this.state.wall4width; var wall4_depth = this.state.wall4depth;

		var box2_PositionX = this.state.box2PositionX; var box2_PositionY = this.state.box2PositionY; var box2_PositionZ = this.state.box2PositionZ; var box2_height = this.state.box2height; var box2_width = this.state.box2width; var box2_depth = this.state.box2depth;

		// starting babylon.js scene
		var createScene = function () {
			var scene = new BABYLON.Scene(engine);
			var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene); camera.setTarget(BABYLON.Vector3.Zero());

			var sphere = BABYLON.Mesh.CreateSphere("sphere", 16, sphere_radius, scene);	sphere.position.x = 0; sphere.position.y = sphere_y_position; sphere.position.z = 0;
			var sphere2 = BABYLON.Mesh.CreateSphere("sphere2", 16, sphere2_radius, scene); sphere2.position.x = 0; sphere2.position.y = sphere2_y_position; sphere2.position.z = 0.5;

			var box2 = BABYLON.MeshBuilder.CreateBox("box2", {height: box2_height, width: box2_width, depth: box2_depth}, scene); box2.position.x = box2_PositionX; box2.position.y = box2_PositionY; box2.position.z = box2_PositionZ;

			var wall1 = BABYLON.MeshBuilder.CreateBox("wall1", {height: wall1_height, width: wall1_width, depth: wall1_depth}, scene); wall1.position.x = wall1_PositionX; wall1.position.y = wall1_PositionY; wall1.position.z = wall1_PositionZ; 
			var wall2 = BABYLON.MeshBuilder.CreateBox("wall2", {height: wall2_height, width: wall2_width, depth: wall2_depth}, scene); wall2.position.x = wall2_PositionX; wall2.position.y = wall2_PositionY; wall2.position.z = wall2_PositionZ;
			var wall3 = BABYLON.MeshBuilder.CreateBox("wall3", {height: wall3_height, width: wall3_width, depth: wall3_depth}, scene); wall3.position.x = wall3_PositionX; wall3.position.y = wall3_PositionY; wall3.position.z = wall3_PositionZ;
			var wall4 = BABYLON.MeshBuilder.CreateBox("wall4", {height: wall4_height, width: wall4_width, depth: wall4_depth}, scene); wall4.position.x = wall4_PositionX; wall4.position.y = wall4_PositionY; wall4.position.z = wall4_PositionZ; 

			scene.enablePhysics();
	
			sphere.physicsImpostor = new BABYLON.PhysicsImpostor(sphere, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.9 }, scene);

			sphere2.physicsImpostor = new BABYLON.PhysicsImpostor(sphere2, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 0.9 }, scene);

			box2.physicsImpostor = new BABYLON.PhysicsImpostor(box2, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

			wall1.physicsImpostor = new BABYLON.PhysicsImpostor(wall1, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
			wall2.physicsImpostor = new BABYLON.PhysicsImpostor(wall2, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
			wall3.physicsImpostor = new BABYLON.PhysicsImpostor(wall3, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
			wall4.physicsImpostor = new BABYLON.PhysicsImpostor(wall4, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);

			return scene;

		};

			var engine = new BABYLON.NullEngine();
	        var scene1 = createScene();

			engine.runRenderLoop(function () {

            if (scene1) {
				scene1.render();

            }
			});

		setInterval(() => {
			const ballposition = scene1.meshes[0].position; this.setState({sphereposition: ballposition});
			const ballrotation = scene1.meshes[0].rotationQuaternion; this.setState({sphererotation: ballrotation});
			const ball2position = scene1.meshes[1].position; this.setState({sphere2position: ball2position});
			const ball2rotation = scene1.meshes[1].rotationQuaternion; this.setState({sphere2rotation: ball2rotation});
		}, interval);

		this.Positioning();

		setInterval(() => {
			const avatarposix = this.state.AvatarPositionX;	const ballposix = scene1.meshes[0].position.x; const relationavatarballx = ballposix - avatarposix;
			const avatarposiz = this.state.AvatarPositionZ;	const ballposiz = scene1.meshes[0].position.z; const relationavatarballz = ballposiz - avatarposiz;
			const avatarhypothenuse = Math.sqrt((relationavatarballx * relationavatarballx) + (relationavatarballz * relationavatarballz));
			var dY = scene1.meshes[0].position.z - this.state.AvatarPositionZ,          // opposite
			dX = scene1.meshes[0].position.x - this.state.AvatarPositionX,          // adjacent
			radians = Math.atan(dY/dX);         // wrong, in [-1/2 pi, 1/2 pi]
			if(1/dX < 0) radians += Math.PI;        // fixed, in [-1/2 pi, 3/2 pi]
			if(1/radians < 0) radians += 2*Math.PI; // fixed, in [+0, 2 pi]
			var relationavatarballangle = radians*180/Math.PI;      // from radians to degrees
			this.setState({AvatarBallAngleXZ: 0 - relationavatarballangle});
			if (avatarhypothenuse < 2){this.setState({aimingplanevisible: "#aimingvisible"});} else {this.setState({aimingplanevisible: "#opacity"});};
		}, interval);

			this.PointerPower(scene1, this.state.clickswitch);
			this.eventSubscriber.on("sphere_click", () => {
				this.setState({clickswitch: 0}); 
			});

	}

  sceneWillUnmount() {

	}

async Positioning(){
			this.subscribeTo('positionChanged', e => {
				this.setState({AvatarPositionX: e.position.x});
				this.setState({AvatarPositionZ: e.position.z});
			})

}

async PointerPower(scene1: any, clickswitch:any){

		var powertiming = 0;
		var pointerpowertiming:any;

		this.subscribeTo("pointerDown", e => {
			powertiming = 0;
			pointerpowertiming = setInterval(() => {powertiming++; if (this.state.clickswitch == 0){this.setState({powertimingstate: powertiming});}}, interval);
			
		})
		this.subscribeTo("pointerUp", e => {

			const avatarposix = this.state.AvatarPositionX; const ballposix = scene1.meshes[this.state.clickswitch].position.x; const relationavatarballx = ballposix - avatarposix;
			const avatarposiz = this.state.AvatarPositionZ; const ballposiz = scene1.meshes[this.state.clickswitch].position.z; const relationavatarballz = ballposiz - avatarposiz;
			const avatarhypothenuse = Math.sqrt((relationavatarballx * relationavatarballx) + (relationavatarballz * relationavatarballz));
			var ball1x = relationavatarballx/avatarhypothenuse;
			var ball1z = relationavatarballz/avatarhypothenuse;
			scene1.meshes[this.state.clickswitch].physicsImpostor.applyImpulse(new BABYLON.Vector3(ball1x * powertiming / 2, 0.5, ball1z * powertiming / 2), scene1.meshes[this.state.clickswitch].getAbsolutePosition());
			this.setState({powertimingstate: 0});
			this.setState({clickswitch: 4});
			clearInterval(pointerpowertiming);
			
		})
};

  async render() {
 
    return (
      <scene>
	  	<material id="glasseffect" alpha={0.3} albedoTexture={'/textures/glass.jpg'} alphaTexture={'/textures/glass.jpg'} />
		<material id="opacity" alpha={0} />
		<material id="aimingvisible" alpha={1} albedoTexture={'/textures/arrow.png'} alphaTexture={'/textures/arrow.png'} />
		<material id="wood" alpha={1} albedoTexture={'/textures/wood.jpg'} alphaTexture={'/textures/wood.jpg'} />
		<material id="green" alpha={1} albedoTexture={'/textures/green.jpg'} alphaTexture={'/textures/green.jpg'} />

		<box position={{ x: 0, y: 0, z: 0 }} rotation={{ x: 0, y: 0, z: 0 }} scale={{ x: 19.99, y: 0.1, z: 19.99 }} color="#72E77C" />

 		<box id="box2" position={{ x: this.state.box2PositionX, y: this.state.box2PositionY, z: this.state.box2PositionZ }} rotation={{ x: 0, y: 0, z: 0 }} scale={{ x: this.state.box2width, y: this.state.box2height, z: this.state.box2depth }} color="#228B22" withCollisions={true} />
		<box id="wall1" position={{ x: this.state.wall1PositionX, y: this.state.wall1PositionY, z: this.state.wall1PositionZ }} rotation={{ x: 0, y: 0, z: 0 }} scale={{ x: this.state.wall1width, y: this.state.wall1height, z: this.state.wall1depth }} color="#bdbdbd" material="#wood" withCollisions={true} />
 		<box id="wall2" position={{ x: this.state.wall2PositionX, y: this.state.wall2PositionY, z: this.state.wall2PositionZ }} rotation={{ x: 0, y: 0, z: 0 }} scale={{ x: this.state.wall2width, y: this.state.wall2height, z: this.state.wall2depth }} color="#bdbdbd" material="#wood" withCollisions={true} />
 		<box id="wall3" position={{ x: this.state.wall3PositionX, y: this.state.wall3PositionY, z: this.state.wall3PositionZ }} rotation={{ x: 0, y: 0, z: 0 }} scale={{ x: this.state.wall3width, y: this.state.wall3height, z: this.state.wall3depth }} color="#bdbdbd" material="#wood" withCollisions={true} />
 		<box id="wall4" position={{ x: this.state.wall4PositionX, y: this.state.wall4PositionY, z: this.state.wall4PositionZ }} rotation={{ x: 0, y: 0, z: 0 }} scale={{ x: this.state.wall4width, y: this.state.wall4height, z: this.state.wall4depth }} color="#bdbdbd" material="#wood" withCollisions={true} />

		<gltf-model id="sphere" position={this.state.sphereposition} rotation={this.state.sphererotation.toEulerAngles().scale(180 / Math.PI)} scale={this.state.sphereradius/2} transition={{position: { duration: interval, timing: "linear" }, rotation: { duration: interval, timing: "linear" }}} src="models/ballwhite.gltf" />
		<gltf-model id="sphere2" position={this.state.sphere2position} rotation={this.state.sphere2rotation.toEulerAngles().scale(180 / Math.PI)} scale={this.state.sphere2radius/2} transition={{position: { duration: interval, timing: "linear" }, rotation: { duration: interval, timing: "linear" }}} src="models/ballblack.gltf" />
		<entity id="aimingplane" position={this.state.sphereposition} rotation={{ x: 90, y: this.state.AvatarBallAngleXZ, z: 0 }} scale={{ x: 2, y: 0.5, z: 1 }} transition={{position: { duration: interval, timing: "linear" }, rotation: { duration: interval, timing: "linear" }}} ><plane id="aimingplane" position={{ x: 0.3, y: 0, z: -0.1 }} rotation={{ x: 0, y: 0, z: 0 }} scale={{ x: 0.5, y: 0.5 + (this.state.powertimingstate / 2), z: 1 }} material={this.state.aimingplanevisible} withCollisions={false} /></entity>

      </scene>
    )
  };
}