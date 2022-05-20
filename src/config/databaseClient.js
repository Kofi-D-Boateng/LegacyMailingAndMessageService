"use strict";
import mongoose from "mongoose";
const { connect } = mongoose;
import config from "./configurations.js";
export default connect(config.MONGO_DB_URI);
