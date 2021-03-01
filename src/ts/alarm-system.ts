enum AlarmType{
    camera = 'camera',
    movement = "movement",
    vibration = 'vibration'
}

abstract class Alarm{
    public alarmType: AlarmType
    public alarmArea: string
    public isConnected: boolean

    constructor(alarmArea: string){
        this.alarmArea = alarmArea;
        this.isConnected = false;
    }
    getAlarmType(): string{
        return `Alarma tipo: ${this.alarmType}`;
    }
    getAlarmArea(): string{
        return `Alarm is in the: ${this.alarmArea}`;
    }
    alarmOn(): boolean{
        if(this.isConnected === false){

        console.log(`%c \nAlarm type ${this.alarmType}, in the ${this.alarmArea} connected...`, 'background: blue; color: white');
        return this.isConnected = true;

        }else{
            console.log(`%c The alarm ${this.alarmType}, in the ${this.alarmArea}, it's already connected...`, 'background: yellow; color: white');
        }
    }
    alarmOff(): boolean{
        if(this.isConnected === true){

        console.log(`%c \nAlarm type ${this.alarmType}, in the ${this.alarmArea} disconnected...`, 'background: red; color: white');
        return this.isConnected = false;

        }else{
            console.log(`%c The alarm ${this.alarmType}, in the ${this.alarmArea}, it's already disconnected...`, 'background: yellow; color: white');
        }
    }
    
}
class Camera extends Alarm{
    public alarmType: AlarmType = AlarmType.camera
  
}

class Movement extends Alarm{
    public alarmType: AlarmType = AlarmType.movement

}

class Vibration extends Alarm{
    public alarmType: AlarmType = AlarmType.vibration

}


class HomeActionFacade{
    private camera: Camera
    private movement: Movement
    private vibration: Vibration

    constructor(camera: Camera, movement: Movement, vibration: Vibration){
        this.camera = camera
        this.movement = movement
        this.vibration = vibration
    }

    armAlarm(){
        this.camera.alarmOn();
        this.movement.alarmOn();
        this.vibration.alarmOn();
    }
    disarmAlarm(){
        this.camera.alarmOff();
        this.movement.alarmOff();
        this.vibration.alarmOff();
    }
}

export let camera = new Camera('livingRoom');
export let movement = new Movement('livingRoom');
export let vibration = new Vibration('livingRoom');

export let homeGlobalAlarm = new HomeActionFacade(camera, movement, vibration);


