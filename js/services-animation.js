const serviceList = document.querySelectorAll('.service__btn');

for (let i = 0; i < serviceList.length; i++) {
    
    const service = serviceList[i];

    const serviceImg = document.querySelector(`#${service.classList[2]}__img`);

    let distanceOver
    let distanceDown

    if(i == 0){

        distanceOver = 'translateY(5rem)'
        distanceDown = 'translateY(1rem)'

    } else if(i == 1) {

        distanceOver = 'translateX(3.5rem)'
        distanceDown = 'translateX(-1rem)'

    } else {

        distanceOver = 'translateY(-4.5rem)'
        distanceDown = 'translateY(0.5rem)'
        
    }

    service.onmouseover = () => {
    
        serviceImg.animate(
            [
                { transform: distanceOver},
            ],
        
            {
                duration: 500,
                iterations: 1,
                fill: 'forwards',
                easing: 'ease-in-out'
            },
        )
    }

    service.onmouseout = () => {

        serviceImg.animate(
            [
                { transform: distanceDown},
            ],
        
            {
                duration: 500,
                iterations: 1,
                fill: 'forwards',
                easing: 'ease-in-out'
            },
        )
    }
    
}
