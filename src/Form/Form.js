import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div class="container">
      <>
        <h1>Student Application Form</h1>
      </>
      <form action="action_page.php">
        <div class="row">
          <div class="select">
            <label for="fname">First Name</label>
          </div>
          <div class="safe">
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Enter Firstname."
            ></input>
          </div>
        </div>
        <div class="row">
          <div class="select">
            <label for="lname">Last Name</label>
          </div>
          <div class="safe">
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Enter last name."
            ></input>
          </div>
        </div>
        <div class="row">
          <div class="select">
            <label for="Age">Age</label>
          </div>
          <div class="safe">
            <input
              type="text"
              id="Age"
              name="Age"
              placeholder="Enter Age."
            ></input>
          </div>
        </div>
        <div class="row">
          <div class="select">
            <label for="Email">Email</label>
          </div>
          <div class="safe">
            <input
              type="text"
              id="Email"
              name="Email"
              placeholder="Enter Email."
            ></input>
          </div>
        </div>

        <div class="row">
          <div class="select">
            <label for="country">Country</label>
          </div>
          <div class="safe">
            <select id="country" name="country">
              <option value="Chandigarh">Chandigarh</option>
              <option value="Himchal Pradesh">Himchal Pradesh</option>
              <option value="Haryana">Haryana</option>
              <option value="Punjab">Punjab</option>
              <option value="J&K">J&K</option>
              <option value="Goa">Goa</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="select">
            <label for="mobile">Mobile</label>
          </div>
          <div class="safe">
            <input
              type="text"
              id="mobile"
              name="Mobile"
              placeholder="Enter mobile."
            ></input>
          </div>
        </div>

        <div class="row">
          <div class="select">
            <label for="subject">Subject</label>
          </div>
          <div class="safe">
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something."
            ></textarea>
          </div>
        </div>
        <div class="row">
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
}
