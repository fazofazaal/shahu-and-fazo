import * as React from 'react';
import { motion } from 'framer-motion';

const draw = {
  start: {
    opacity: 0,
    pathLength: 0,
  },
  end: {
    opacity: 1,
    pathLength: 1,
  },
};

export default function Drawing(props) {
  return (
    <svg
      width={392}
      height={407}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.path
        d="M222.148 277.963c-.783-.203-2.179-.19-6.03-2.115-3.959-1.978-10.091-1.97-7.361 8.139 1.473 5.451-.557 6.187 1.23 5.967 1.42-.176 13.388 5.343 10.143 27.014-.06.404-.072.467-.144.866l-.074.334c-.724 4.026-1.345 7.945-1.681 11.543-1.509 16.144 24.971 50.77 22.104 36.663-2.866-14.107-31.233-40.284-60.279-40.661-29.045-.377-72.318 10.766-94.306 22.613-24.84 13.382-54.974 33.26-72.835 53.168-9.387 10.463-9.266 1.219-6.483-12.558 0 0 13.607-43.607 30.796-64.515 16.404-19.954 44.725-29.2 67.53-21.32 43.814 15.138-11.188 14.736-47.7 35.038-36.512 20.303-66.38 37.875-52.658 2.414 5.444-14.067 32.329-49.934 56.017-52.784 23.689-2.849 19.446 13.718-.133 9.323-22.095-4.96-22.755-19.036-25.18-30.368-5.355-25.01 1.083-43.766 19.962-68.877 18.88-25.112 35.625-43.705 55.655-57.324 19.585-13.316 25.281-12.941 36.48-15.69 1.057-.26-4.949-1.437-11.802-.134-21.551 4.096-39.497 16.809-45.424 68.339-5.35 46.515 2.458 95.779 21.159 103.615 18.701 7.836 14.004-4.989-19.824-17.809-46.653-17.679-36.066-53.748-25.201-69.243 10.865-15.494 29.922-20.125 10.686 19.234-19.236 39.36-.89 63.936 24.045 70.526 24.935 6.589 39.896 10.508 35.8 9.439-4.097-1.069-27.693-20.381-30.364-81.112-2.672-60.73 16.471-99.298 46.75-101.436 30.278-2.137 53.076 7.302 65.543 33.66 12.467 26.359.599-7.958-31.638-8.671 0 0-17.808 3.248-38.892 43.934l-4.195 8.328s6.488-8.147 22.633-4.073c16.145 4.073 18.257 8.524 21.501 4.677 3.245-3.847-6.789-10.561-20.445-11.316-13.655-.754-21.577 2.792-27.235 16.521-5.658 13.73 3.395 10.939 11.166 7.695 7.77-3.244 12.448-3.546 13.881-.453 1.433 3.093-.616 6.136-4.238 6.438-3.621.302-7.606-1.61-7.833-2.968-.226-1.358-.452-4.828 6.79-5.507 7.243-.679 12.222 2.112 15.24 4.828 3.018 2.716 2.338 1.509-2.716 2.112-5.055.604-11.028 3.94-20.295-.679 0 0-1.584-.679-3.923-1.584s-3.093-3.319 2.037-6.789c5.13-3.47 19.917-7.921 27.613 3.395 0 0-4.51-8.806-18.578-8.355-22.484.723-36.945 32.34-35.909 62.522 1.037 30.182 10.882 39.767 33.682 46.374 22.8 6.606 30.832 12.436 43.139 12.047 12.307-.389 18.266-7.254 21.764-17.488 3.497-10.233 12.171-18.852 16.841-31.866 4.191-11.682 6.995-21.373 4.664-34.845-2.237-12.92-2.447-18.334-5.547-30.868-.132-.535-.27-1.083-.413-1.645-3.498-13.731-18.395-7.514-24.743-8.55-6.348-1.036-6.089-6.606 6.348-8.031 12.436-1.425 19.302 7.902 18.007 19.171-1.296 11.27-9.889 2.764-17.11 1.519-3.154-.544-5.179-.483-8.028 1.068-3.782 2.059-1.953 7.339-.746 7.566 1.208.226 3.406.604 6.047.604 2.64 0 3.804-3.111 3.056-6.432-.647-2.875-3.214-4.048-7.288-2.238-4.074 1.811-5.914 4.275-6.895 6.539-.98 2.263 1.66.829 3.546 1.207 1.886.377 14.259 3.545 20.822-4.074l1.194-1.419a2.815 2.815 0 0 0-.289-3.923c-2.519-2.234-7.625-5.391-15.691-4.389-12.147 1.509-17.201 12.523-9.129 23.537 8.072 11.013 14.107 20.519 9.883 24.819-4.225 4.3-2.539-2.598-.377-2.641 1.306-.025.984.745.005 1.005-.823.219-1.991.747-3.128 2.711-2.489 4.3-4.799 2.395-8.948 1.188s-6.036-1.811-8.525-1.961c-2.49-.151-.151-2.943 4.451-2.641 2.632.173 4.476 2.289 4.639 3.151.123.645-.696.275-2.828-.435-4.979-1.66-4.526 1.132-8.525 1.811-3.998.679-9.096-1.214-8.827-6.187.579-10.691 14.41-14.559 19.465-4.903 5.054 9.656 3.847 24.366 3.772 27.082-.075 2.716-2.792-4.677-9.581-1.66-6.79 3.018-20.747 4.678-28.443 4.602-7.695-.075-7.167-5.658-3.47-9.732 3.697-4.073 4.146-3.93-.305.596-4.452 4.527-6.183 10.645-5.278 15.85.905 5.205-3.738-11.333 5.617-7.184s26.22 2.205 38.895 1.375c9.744-.638 14.554-1.704 16.348-2.211 0 0 1.064-.168 1.018-.09-2.508 4.296-5.254 9.386-10.641 11.02-11.669 3.541-28.938-2.873-36.709-6.494-1.3-.606-4.571-2.068-5.962-2.631"
        stroke="#333745"
        strokeWidth={1}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 10, easing: 'easInOut' }}
      />
      <motion.path
        d="M336.179 83.13c-2.126-11.15-11.492-26.22-16.07-33.217-10.675-16.32-.982-15.338 10.308-3.19 11.289 12.148 11.902 23.314 12.148 37.549.245 14.234 5.644 3.313-.737-9.94-6.381-13.252-20.86-32.15-35.34-40.493-14.479-8.344-32.149-6.258-56.445 1.595s-30.922 21.964-35.585 36.321c-3.45 10.623-3.975 20.554-4.014 25.002-.007.723.306.81.712.213 4.101-6.034 11.358-8.015 18.059-9.416 7.284-1.523 11.521-11.455 3.509-11.919-8.012-.464-17.071 5.878-19.719 17.003-2.649 11.124.451 27.03 1.179 24.315.729-2.715 7.946-10.528 14.17-12.978 6.224-2.451 9.469-2.517 10.131-.53.662 1.986-4.9 4.106-7.747 5.297-2.847 1.192-6.092 1.523-6.886-.861-.795-2.384 6.82-6.025 14.434-5.76 7.615.265 5.562.132 1.656 2.119-3.669 1.865-6.3 4.164-14.419 5.973a23.7 23.7 0 0 1-6.586.53c-.014-.001-.376-8.486 7.504-15.439 7.88-6.952 22.806-7.66 24.13 2.935 1.325 10.594-10.563 21.296-9.173 27.653 1.391 6.356 9.204 3.774 9.403.728.236-3.627-8.971 2.259-5.296 1.73 1.316-.189 1.678-.664 2.779-1.132 4.197-1.786 5.884 3.173 10.733-.443 3.629-2.707 6.814-4.194 10.787-4.789 4.155-.624 4.159-3.4-.86-2.781-4.834.596-7.152 3.045-6.754 4.767.397 1.722 4.837-1.929 11.259-.317 3.436.863 7.942.361 9.74-3.126 1.076-2.087.735-4.661-.409-6.648-.913-1.584-2.454-2.64-3.575-4.069a9.672 9.672 0 0 1-.178-.235c-1.18-1.602-2.186-3.383-3.045-5.175-3.016-6.288-3.649-13.71.538-19.629 3.33-4.707 8.957-7.16 14.648-7.729 7.671-.767 12.932 2.645 16.202 4.754 1.383.891 1.267 2.13-.255 2.757l-2.59 1.066c-11.166 5.768-20.86 4.663-22.824 5.4-1.963.736-3.068-.369 3.068-4.786 6.135-4.418 14.111-2.086 14.111-2.086 1.718 1.718.369 2.945.369 2.945-5.154 3.068-11.412 2.944-11.412 2.944-.736-1.227-.736-4.049-.736-4.049.859-3.681 10.553-2.945 24.05-1.227 13.498 1.718 9.571-16.443-5.767-23.928-15.338-7.485-37.254-2.961-39.144 3.682-2.559 8.997 4.596 7.308 24.542 4.54 8.338-1.157 15.263-1.238 20.958-.71 13.409 1.245 24.306 11.497 26.388 24.8 4.954 31.652-.077 57.631-3.85 66.54-4.402 10.394-10.761-5.38-17.609-9.538-1.712-1.04-2.919-2.305-3.766-3.62-2.004-3.108-2.133-7.026-.737-10.451 1.794-4.399 1.884-11.395-8.46-15.085-12.25-4.37 1.721 2.781-9.734 4.436-11.455 1.656-20.612-1.519-28.215.465-2.778.725-4.459 1.602-5.464 2.48-1.129.987-1.519 2.577-1.061 4.005a47.66 47.66 0 0 0 1.638 4.339c1.372 3.17 3.232 7.233 1.669 6.623-4.595-1.797-11.943 3.631-17.247 8.451-4.93 4.482-8.387 8.738-4.77 13.46 4.934 6.442 16.542 8.412 21.269 6.465 4.295-1.769-12.928-5.526-11.886-10.844 1.043-5.317 8.2-5.741 18.001-8.66 9.8-2.919 18.596-3.434 19.638.736 1.043 4.171-15.742 13.136-12.928 16.057 2.606 2.704 10.289 2.284 19.881-3.763 9.592-6.048 11.919-16.36 9.521-20.843-2.398-4.483-11.677-5.005-13.867-3.024-2.189 1.982-9.905 7.716-22.416 10.948-12.512 3.232-18.038 2.189-22.521 2.189-4.483 0 .312-2.606 14.805-6.672s27.317-6.881 30.966-7.299c3.649-.417-9.801-.417-17.829-.938-5.772-.375-6.389 2.004-8.27 3.462-1.291 1-2.684-2.704-4.198-6.631-1.514-3.927-2.68-4.8-2.68-4.8-1.658-1.309-5.19-3.85-8.832-.795-5.124 4.298-7.935 8.155-14.382 9.864-6.447 1.708-6.667-.056-5.896-1.598.772-1.543-3.686 3.463-3.556 14.052.154 12.502.784 14.317-2.908 10.79-3.692-3.527-9.019-17.348-9.57-26.826-.551-9.477-1.157-17.798-1.213-20.553-.055-2.755.662-.606.662 2.259 0 2.866-3.527 1.543-4.574-8.155-1.047-9.698-3.061-16.082-3.116-23.41-.056-7.33 2.4-15.767 6.257-16.814 3.857-1.047 5.18 1.322 2.039 1.432-3.142.11-12.123-11.626-1.213-23.253s24.282-12.03 29.425-12.178c5.143-.147-15.87-11.314-31.445.735-15.576 12.05-5.29 20.719-2.205-2.792 3.086-23.51 45.405-20.865 48.637-11.608 3.233 9.258-6.318 9.11-12.196-1.175-5.878-10.286-28.304-7.85-33.613-.981-1.327 1.718 4.847-11.688 24.537-14.48 19.69-2.792 33.762 2.971 36.701 12.963 2.938 9.992-3.38 6.613-7.935-2.645-4.555-9.257-15.576-15.134-25.862-13.518-10.285 1.616 35.266-9.551 47.315 8.522 12.049 18.074-2.352 10.58-7.935 3.527-5.584-7.053-1.029-18.955 18.22-4.408 19.25 14.546 13.813 26.302 8.523 16.75-5.29-9.55-3.086-23.804 6.171-10.138 9.258 13.666 11.462 15.87 19.543 18.22 8.082 2.352 19.103 19.25 23.217 34.678 4.114 15.429 5.584 20.719.735 31.298-4.849 10.58-2.645 11.755-.588 16.457s-1.029 12.197 1.322 10.727c2.352-1.469 2.645-1.616 4.409-.735 1.763.882 5.289-.587 5.73-4.849.441-4.261-3.379-10.285-7.2-12.196-3.82-1.91-2.939-14.106 3.086-14.988 6.025-.882 9.698 11.755 10.433 23.804.735 12.05-4.617 20.081-8.229 22.629-2.87 2.025-7.924 2.406-9.981-3.178-2.058-5.584-.892 10.084 1.165 31.244 2.057 21.159 13.723 47.027 30.328 52.022 16.604 4.996 1.999-14.847-26.802 10.721-28.8 25.567-53.045 31.739-57.894 38.939-4.849 7.2-19.486 14.423-23.306 6.488-3.821-7.935-25.098-2.576-16.843-16.816 9.384-16.188-2.199-39.544-13.773-50.872-11.574-11.329-18.598-32.958-21.839-40.809-.457-1.108 3.434 8.504 4.735 11.789.281.712.577 1.42.904 2.113 11.579 24.548 36.303 38.049 52.402 37.019 16.326-1.045 43.622-15.934 57.467-35.786 13.844-19.852 12.277-40.88 12.277-50.153 0-9.273-1.37-15.47-1.37-19.967"
        stroke="#333745"
        strokeWidth={1}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 10, easing: 'easInOut' }}
      />
    </svg>
  );
}