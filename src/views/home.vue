<template>
  <div>
    <Banner />
    <Intro />
    <Start />
    <PolicyUpgrade />
    <MoreInfo />
    <CutomerResponse />
  </div>
</template>

<script>
import Banner from "../components/banner";
import Intro from "../components/intro";
import Start from "../components/start";
import PolicyUpgrade from "../components/policyUpgrade";
import MoreInfo from "../components/moreInfo";
import CutomerResponse from "../components/customerResponse";

export default {
  components: {
    Banner,
    Intro,
    Start,
    PolicyUpgrade,
    MoreInfo,
    CutomerResponse
  }
};
</script>