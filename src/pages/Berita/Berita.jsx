/** @format */

import React, { useEffect, useState } from "react";

import moment from "moment";
import "moment/locale/id";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { beritaSelector, getBerita } from "../../features/beritaSlice";
moment.locale("id");

const Berita = () => {
  const [loading, setLoading] = useState(true);
  const artikelStatus = useSelector((state) => state.artikel.status);
  const dataBerita = useSelector(beritaSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBerita());
  }, [dispatch]);

  useEffect(() => {
    if (artikelStatus === "success") {
      if (dataBerita.data) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
  }, [artikelStatus, dataBerita]);

  const card = () => {
    return (
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        {dataBerita.data.map((data, index) => {
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

export default Berita;
