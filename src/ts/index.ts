import '../scss/style.scss';
import { camera, movement, vibration, homeGlobalAlarm} from './alarm-system';

const btnHouseAlarm = document.getElementById('house-alarm') as HTMLButtonElement;

btnHouseAlarm.addEventListener('click', (e) => {
    e.preventDefault();
    if(btnHouseAlarm.classList.contains('danger')){
        homeGlobalAlarm.disarmAlarm();
    }else{
        homeGlobalAlarm.armAlarm();
    }
    btnHouseAlarm.classList.toggle('danger');
})


/* console.log(camera);
console.log(movement);
console.log(vibration);

homeGlobalAlarm.armAlarm();
console.log(camera);
camera.alarmOn(); */





