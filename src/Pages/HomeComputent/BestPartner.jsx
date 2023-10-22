import React from 'react';
import { BsSuitHeartFill, BsXCircleFill } from "react-icons/bs";
const BestPartner = () => {
    return (
 <div className=' bg-black  bg-opacity-20  absolute bottom-28  py-6 left-52 right-52'>
    <div>
        <h2 className=' text-center text-xl font-bold text-white'>Find Your Best Partner</h2>
    </div>
    <div className='flex justify-around  '>
    <div className="form-control  max-w-xs">
  <label className="label p-0">
    <span className="label-text  text-slate-50 text-lg  font-semibold">Looking For</span>
    </label>
  <select className="select select-bordered text-lg">
    <option disabled selected>Pick One</option>
    <option>Men</option>
    <option>Women</option>
    </select>
   </div>

   <div className="form-control  max-w-xs">
  <label className="label p-0">
    <span className="label-text text-slate-50 text-lg  font-semibold">Minimum age</span>
    </label>
  <select className="select select-bordered text-lg">
    <option disabled selected>Pick One</option>
    <option>18</option>
    <option>19</option>
    <option>20</option>
    <option>21</option>
    <option>22</option>
    <option>23</option>
    <option>24</option>
    <option>25</option>
    <option>26</option>
    <option>27</option>
    <option>28</option>
    <option>29</option>
    <option>30</option>
    <option>31</option>
    </select>
   </div>

   <div className="form-control  max-w-xs">
  <label className="label p-0">
    <span className="label-text text-slate-50 text-lg  font-semibold">Maximum age</span>
    </label>
  <select className="select select-bordered text-lg">
    <option disabled selected>Pick One</option>
    <option>18</option>
    <option>19</option>
    <option>20</option>
    <option>21</option>
    <option>22</option>
    <option>23</option>
    <option>24</option>
    <option>25</option>
    <option>26</option>
    <option>27</option>
    <option>28</option>
    <option>29</option>
    <option>30</option>
    <option>31</option>
    </select>
   </div>

   <div className="form-control  max-w-xs">
  <label className="label p-0">
    <span className="label-text text-slate-50 text-lg  font-semibold">Religion</span>
    </label>
  <select className="select select-bordered text-lg">
    <option disabled selected>Pick One</option>
    <option>Islam</option>
    <option>Chiritan</option>
    <option>Hundu</option>
    <option>Buddist</option>
    </select>
   </div>

   <div className="form-control  max-w-xs">
  <label className="label p-0">
    <span className="label-text text-slate-50 text-lg  font-semibold">Profession</span>
    </label>
  <select className="select select-bordered text-lg">
    <option disabled selected>Pick One</option>
    <option>Banker</option>
    <option>Doctor</option>
    <option>Farmer</option>
    <option>Teacher</option>
    <option>Businessman</option>
    </select>
   </div>
   <button className="btn   mt-4 btn-success">Submit</button>
 </div>
 <div className='flex justify-center'>
 <span className='mt-6 mr-1 text-pink-500'><BsSuitHeartFill/></span>
    <h2 className='text-center text-xl font-bold text-white pt-4'>Securely search your life partner</h2>
 </div>
 </div>
    );
};

export default BestPartner;