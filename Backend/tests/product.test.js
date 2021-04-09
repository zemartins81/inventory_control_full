import axios from "axios";
import crypto from "crypto";
import productService from "../src/services/productService.js";

const generate = () => crypto.randomBytes(10).toString("hex");
