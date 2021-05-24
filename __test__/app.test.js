import { addTrip } from '../src/client/js/addTrip';
import { axiosPost } from '../src/client/js/axiosPost';
import { checkError } from '../src/client/js/checkError';
import { clearCurrentTrip } from '../src/client/js/clearCurrentTrip';
import { clearUI } from '../src/client/js/clearUI';
import { closeAllTrips } from '../src/client/js/closeAllTrips';
import { createAllTripFrag } from '../src/client/js/createAllTripFrag';
import { currentTripObject } from '../src/client/js/currentTripObject';
import { daysUntilDep } from '../src/client/js/daysUntilDep';
import { deleteTrip } from '../src/client/js/deleteTrip';
import { eraseAllTrips } from '../src/client/js/eraseAllTrips';
import { getAllTripData } from '../src/client/js/getAllTripData';
import { getCurrentTrip } from '../src/client/js/getCurrentTrip';
import { getGeonames } from '../src/client/js/getGeonames';
import { getPixaBay } from '../src/client/js/getPixaBay';
import { getTripDuration } from '../src/client/js/getTripDuration';
import { getWeatherbit } from '../src/client/js/getWeatherbit';
import { keypressed } from '../src/client/js/keypressed';
import { openAllTrips } from '../src/client/js/openAllTrips';
import { setAllTripData } from '../src/client/js/setAllTripData';
import { sortAllTrips } from '../src/client/js/sortAllTrips';
import { updateUI } from '../src/client/js/updateUI';

describe("Checks window alert on checkError", () => {
    test("makes alert once", () => {
        const watchAlert = jest.spyOn(window, 'alert');
        checkError();
        expect(watchAlert).toHaveBeenCalledTimes(1);
    });
})

describe("Checks daysUntilDep", () => {
    test("trip countdown calculation", () => {
        const dateDep = "2021-06-17";
        let countdown = daysUntilDep(dateDep, "n");
        expect(countdown).toBeLessThan(25);
        countdown = daysUntilDep(dateDep);
        expect(countdown).toEqual("in 24 days.");
    });
})

describe("Checks getTripDuration", () => {
    test("trip duration calculation", () => {
        const dateRet = "2021-04-19";
        const dateDep = "2021-04-14";
        
        const tripduration = getTripDuration(dateRet, dateDep);
        expect(tripduration).toEqual(5);
    });
})

describe("Checks window alert on eraseAllTrips", () => {
    test("eraseAllTrips", () => {
        expect(eraseAllTrips).toBeDefined();
    })
    test("makes alert once", () => {
        const watchAlert = jest.spyOn(window, 'alert');
        eraseAllTrips();
        expect(watchAlert).toHaveBeenCalledTimes(1);
    });
})

describe("Checks closeAllTrips/openAllTrips", () => {
    test("Tests that closeAlltrips changes style", () => {
        
        document.body.innerHTML = `
        <div id="plannedTrips">
        <p></p>
        </div>
        `;
        const plannedTrips = document.getElementById("plannedTrips");
        plannedTrips.style.width = "100%";
        expect(plannedTrips.style.width).toEqual("100%");
        closeAllTrips();
        expect(plannedTrips.style.width).toEqual("0%");
    })

    test("Test that openAllTrips changes style", () => {

        document.body.innerHTML = `
        <div id="plannedTrips">
        <p></p>
        </div>
        `;
        const plannedTrips = document.getElementById("plannedTrips");
        plannedTrips.style.width = "0%";
        expect(plannedTrips.style.width).toEqual("0%");
        openAllTrips();
        expect(plannedTrips.style.width).toEqual("100%");
    })
});

describe("Checks getAllTripData", () => {
    test("Test that getAllTripData returns 'No Data'", () => {
        expect(getAllTripData()).toEqual("No Data!");
    })
})

describe("Checks clearUI.js", () => {
    test("Test that inputs class and values are changed", () => {

        document.body.innerHTML = `
                <div id="background">
                    <div id="plannedTrips">
                        <input id="trip-outbound" class="inputComplete somethingElse" value="value1"></input>
                        <input id="outbound" class="inputComplete somethingElse" value="value2"></input>
                        <input id="inbound" class="inputComplete somethingElse" value="value3"></input>
                    </div>
                </div>
                `;
        const input1 = document.getElementById("trip-outbound");
        const input2 = document.getElementById("outbound");
        const input3 = document.getElementById("inbound");
        expect(input1.value).toEqual("value1");
        expect(input2.value).toEqual("value2");
        expect(input3.value).toEqual("value3");
        expect(input1.classList).toContain("inputComplete");
        expect(input2.classList).toContain("inputComplete");
        expect(input3.classList).toContain("inputComplete");
        clearUI();
        expect(input1.value).toEqual("value1");
        expect(input2.value).toEqual("");
        expect(input3.value).toEqual("");
        expect(input1.classList).toContain("inputComplete");
        expect(input2.classList).not.toContain("inputComplete");
        expect(input3.classList).not.toContain("inputComplete");
        expect(input2.classList).toContain("inputIncomplete");
        expect(input3.classList).toContain("inputIncomplete");
    })
    test("Test that checks background is changed", () => {
        document.body.innerHTML = `
        <div id="background">
            <div id="plannedTrips">
                <input id="trip-outbound" class="inputComplete somethingElse" value="value1"></input>
                <input id="outbound" class="inputComplete somethingElse" value="value2"></input>
                <input id="inbound" class="inputComplete somethingElse" value="value3"></input>
            </div>
        </div>
        `;
        const background = document.getElementById("background");
        background.setAttribute("style", "background: url()"+" center center");
        clearUI();
        expect(background.style).not.toEqual("");
    })
})



// function resetBackgroundImage(url = "../img/envio-30.jpg") {
//     const inputForm = document.getElementById('background');
//     inputForm.setAttribute("style","background: url("../img/envio-30.jpg") center center / cover  no-repeat; transition: .5s");
// }

describe("Checks other app functions", () => {
    test("checks currentTrip is defined and is false", () => {
        expect(getCurrentTrip()).toBeFalsy(); //no sessionStorage
        expect(getCurrentTrip).toBeDefined();
    });
    test("Makes sure addTrip is defined", () => {
        expect(addTrip).toBeDefined();
    });
    test("Checks axiosPost is defined", () => {
        expect(axiosPost).toBeDefined();
    });
    
    test("Checks createAllTripFrag is defined", () => {
        expect(createAllTripFrag).toBeDefined();
    });
    test("Verifys that deleteTrip is defined", () => {
        expect(deleteTrip).toBeDefined();
    });
    test("Checks sortTrips is defined", () => {
        expect(sortAllTrips).toBeDefined();
    });
    test("Checks getPixaBay is defined", () => {
        expect(getPixaBay).toBeDefined();
    });
    test("Checks checkError is defined and is false", () => {  
        expect(checkError()).toBeFalsy();
        expect(checkError).toBeDefined();        
    });
    test("Verifys that clearCurrentTrip is defined", () => {
        expect(clearCurrentTrip).toBeDefined();
    });
    test("Verifys that getGeonames is defined", () => {
        expect(getGeonames).toBeDefined();
    });
    test("Verifys that getWeatherbit is defined", () => {
        expect(getWeatherbit).toBeDefined();
    });
    test("Takes updateUI and establishes it's defined", () => {
        expect(updateUI).toBeDefined();
    });
    test("Checks currentTripObject is defined", () => {
        expect(currentTripObject).toBeDefined();
    });
    test("Verifys that setAllTripData is defined", () => {
        expect(setAllTripData).toBeDefined();
    });
    test("Checks keypressed is defined", () => {
        expect(keypressed).toBeDefined();
    });
    
})




// describe("Checks formhandler", () => {
//     // test()
// })
