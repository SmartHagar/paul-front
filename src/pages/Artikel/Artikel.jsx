/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { artikelSelector, getArtikel } from "./../../features/artikelSlice";
// momentjs
// import moment from "moment/min/moment-with-locales";
import Loading from "../../components/Loading";
import moment from "./../../app/moment";

const Artikel = () => {
  const [loading, setLoading] = useState(true);
  const artikelStatus = useSelector((state) => state.artikel.status);
  const dataArtikel = useSelector(artikelSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtikel());
  }, [dispatch]);

  useEffect(() => {
    if (artikelStatus === "success") {
      if (dataArtikel.data) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
  }, [artikelStatus, dataArtikel]);

  const card = () => {
    return (
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        {dataArtikel.data.map((data, index) => {
          //  split content by space
          const contentSplit = data.content.split(" ");
          //  get 10 words
          const limitContent = contentSplit.slice(0, 10).join(" ");
          return (
            <div
              className="card card-side bg-base-100 shadow-xl animate__animated animate__fadeIn"
              key={index}
            >
              <figure>
                <img src={data.image} className="h-full w-28" alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: limitContent }}></p>
                <div className="grid grid-cols-2 text-sm">
                  <span>{data.author}</span>
                  <span className="justify-self-end">
                    {moment(data.updated_at, "YYYYMMDD hh:mm:ss").fromNow()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return <div>{loading ? <Loading /> : card()}</div>;
};

export default Artikel;
