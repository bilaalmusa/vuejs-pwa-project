<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
  </div>
  <br><br>
  <div id="myBio">
  <img width="170" src="../assets/dp.png" alt="Avatar" /> <br><br>
  <h3>MMU Software Engineering Student</h3> <br>
  <ul class="list-inline">
    <li>
      <a target="_blank" href="https://github.com/bilaalmusa" title="Github"
        ><i class="fa fa-3x fa-github-square"></i
      ></a>
    </li>
    <li>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/bilaalmusa/"
        title="LinkedIn"
        ><i class="fa fa-3x fa-linkedin-square"></i
      ></a>
    </li>
    <li>
      <a target="_blank" href="mailto:bmusa15@hotmail.co.uk?body=Hi%20Bilaal%2C" title="Email"
        ><i class="fa fa-3x fa-envelope-square"></i
      ></a>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'About',
};

</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css");

img {
  border-radius: 50%;
}

#myBio {
  text-align: center;
  top: 200px;
}

.list-inline li a {
  display: inline-block;
  color: #123857;
  /* margin-right: 15px; */
}

.list-inline li a:hover {
  color: #ee2f72;
}

.fa.fa-3x.fa-angle-double-down {
  color: #123857;
  /* margin-top: 20px; */
}

.fa.fa-3x.fa-angle-double-down:hover {
  color: #ee2f72;
}

</style>
