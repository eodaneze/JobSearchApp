import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
     const [data, setData] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState(null);
}