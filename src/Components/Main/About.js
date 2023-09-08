import React from "react";

const About = () => {
  return (
    <div className="px-44">
      <p className="text-4xl font-bold text-center underline mt-4">
        About BloodLink
      </p>
      <br />
      <p className="text-xl">
        BloodLink works as a platform for users to register as blood to either
        request/donate blood and blood banks to manage their stocks by managing
        the pending donations and request along with scheduling blood camps and
        managing them. The system will authenticate the user/bank using their
        username(mobile) and password to further perform other actions.
      </p>
      <br />
      <p className="text-xl">
        It includes managing and tracking blood donations, connecting donors
        with recipients, and providing real-time information on blood shortages
        and needs. The platform will include both a user-facing interface and an
        blood bank’s interface for managing the data.
      </p>

      <p className="text-4xl font-bold text-center underline mt-4 mb-3">
        What Happens to Donated Blood?
      </p>
      <div className="text-2xl text-center">
        Your blood journeys through many steps and tests that ensure our blood
        supply is as safe as possible and helps as many people as possible.
      </div>

      <p className="text-2xl font-bold text-left mt-4 mb-2">
        1) Step One - The Donation
      </p>
      <div className="text-xl text-left">
        You arrive for your blood donation appointment. Health history and mini
        physical are completed. For a whole blood donation, about 1 pint of
        blood is collected; several small test tubes of blood are also collected
        for testing. Your donation, test tubes and your donor record are labeled
        with an identical bar code label. Your donation is kept on ice before
        being taken to a Red Cross center for processing; the test tubes go to
        the lab.
      </div>

      <p className="text-2xl font-bold text-left mt-4 mb-2">
        2) Step Two - Processing
      </p>
      <div className="text-xl text-left">
        At our processing center, information about your donation is scanned
        into a computer database. Most whole blood donations are spun in
        centrifuges to separate it into transfusable components: red cells,
        platelets, and plasma. Plasma may be processed into components such as
        cryoprecipitate, which helps control the risk of bleeding by helping
        blood to clot. Red cells and platelets are leuko-reduced, which means
        your white cells are removed in order to reduce the possibility of the
        recipient having a reaction to the transfusion. Each component is
        packaged as a “unit,” a standardized amount that doctors will use when
        transfusing a patient.
      </div>

      <p className="text-2xl font-bold text-left mt-4 mb-2">
        3) Step Three - Testing
      </p>
      <div className="text-xl text-left">
        In parallel with Step 2, your test tubes arrive at a testing laboratory.
        A dozen tests are performed, to establish the blood type and test for
        infectious diseases. Learn More About Tests Performed. Test results are
        transferred electronically to the processing center within 24 hours. If
        a test result is positive, your donation will be discarded and you will
        be notified (our test results are confidential and are only shared with
        the donor, except as may be required by law).
      </div>

      <p className="text-2xl font-bold text-left mt-4 mb-2">
        4) Step Four - Storage
      </p>
      <div className="text-xl text-left">
        When test results are received, units suitable for transfusion are
        labeled and stored. Red cells are stored in refrigerators at 6ºC for up
        to 42 days. Platelets are stored at room temperature in agitators for up
        to five days. Plasma and cryo are frozen and stored in freezers for up
        to one year.
      </div>

      <p className="text-2xl font-bold text-left mt-4 mb-2">
        5) Step Five - Distribution
      </p>
      <div className="text-xl text-left">
        Blood is available to be shipped to hospitals 24 hours a day, 7 days a
        week. Hospitals typically keep some blood units on their shelves, but
        may call for more at any time, such as in case of large scale
        emergencies.
      </div>

      <p className="text-2xl font-bold text-left mt-4 mb-2">
        6) Step Six - Transfusion
      </p>
      <div className="text-xl text-left">
        An ill or injured patient arrives at a hospital or treatment center.
        Physicians determine whether the patient requires a transfusion and, if
        so, which type. Blood transfusions are given to patients in a wide range
        of circumstances, including serious injuries (such as in a car crash)
        surgeries, child birth, anemia, blood disorders, cancer treatments, and
        many others. See How Blood Donations Help. A patient suffering from an
        iron deficiency or anemia may receive red blood cells to increase their
        hemoglobin and iron levels, improving the amount of oxygen in the body.
        Patients who are unable to make enough platelets, due to illness or
        chemotherapy, may receive platelet transfusions to stay healthy. Plasma
        transfusions are used for patients with liver failure, severe
        infections, and serious burns.
      </div>

      <p className="text-center text-5xl">
        <br />
        <a
          target="_blank"
          href="https://github.com/amanbhardwaj12072003"
          className="hover:drop-shadow-md hover:text-purple"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          target="_blank"
          href="https://www.linkedin.com/in/aman-bhardwaj-138938143/"
          className="hover:drop-shadow-md hover:text-metal"
        >
          <i class="fa-brands fa-linkedin"></i>{" "}
        </a>
        &nbsp;&nbsp;
      </p>
    </div>
  );
};

export default About;
