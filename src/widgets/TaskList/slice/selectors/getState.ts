import { createSelector } from "@reduxjs/toolkit";
import { StoreConfig } from "../../../../app/store/config/StateConfig.config.ts";
//куда мне сувать конфиги??

export const getState = (state: StoreConfig) => state;
